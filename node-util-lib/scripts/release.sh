#!/usr/bin/env bash
set -e

# ─────────────────────────────────────────────
# Release script: builds and publishes only dist
# artifacts to a 'release' branch with a version tag.
#
# Usage:
#   npm run release          → uses version from package.json
#   npm run release -- 1.2.3 → uses provided version
# ─────────────────────────────────────────────

VERSION=${1:-$(node -p "require('./package.json').version")}
RELEASE_BRANCH="release"
TAG="v${VERSION}"

echo "🔨 Building v${VERSION}..."
npm run build

# Create a temp directory for the release
RELEASE_DIR=$(mktemp -d)
trap "rm -rf $RELEASE_DIR" EXIT

# Copy only the build artifacts
cp -r dist/* "$RELEASE_DIR/"
cp README.md "$RELEASE_DIR/" 2>/dev/null || true
cp LICENSE "$RELEASE_DIR/" 2>/dev/null || true

# Generate a clean package.json (no devDependencies, paths point to root)
node -e "
const pkg = require('./package.json');
const release = {
  name: pkg.name,
  version: '${VERSION}',
  description: pkg.description,
  type: pkg.type,
  main: './node-util-lib.cjs',
  module: './node-util-lib.js',
  types: './index.d.ts',
  exports: {
    '.': {
      import: {
        types: './index.d.ts',
        default: './node-util-lib.js'
      },
      require: {
        types: './index.d.cts',
        default: './node-util-lib.cjs'
      }
    }
  },
  peerDependencies: pkg.peerDependencies,
  peerDependenciesMeta: pkg.peerDependenciesMeta
};
console.log(JSON.stringify(release, null, 2));
" > "$RELEASE_DIR/package.json"

# Initialize git in release dir and push to release branch
cd "$RELEASE_DIR"
git init
git checkout -b "$RELEASE_BRANCH"
git add -A
git commit -m "release: ${TAG}"

# Get the remote URL from the source repo
REMOTE_URL=$(cd - > /dev/null && git remote get-url origin 2>/dev/null || echo "")

if [ -z "$REMOTE_URL" ]; then
  echo ""
  echo "⚠️  No git remote found. Release built at: $RELEASE_DIR"
  echo "   Add a remote and push manually:"
  echo "   git remote add origin <your-repo-url>"
  echo "   git push origin ${RELEASE_BRANCH} --force"
  echo "   git tag ${TAG} && git push origin ${TAG}"
  trap - EXIT  # Don't clean up since we couldn't push
  exit 0
fi

git remote add origin "$REMOTE_URL"
git push origin "$RELEASE_BRANCH" --force
git tag "$TAG"
git push origin "$TAG"

echo ""
echo "✅ Released ${TAG} to '${RELEASE_BRANCH}' branch"
echo ""
echo "📦 Consumers install with:"
echo "   npm install git+ssh://git@github.com:<org>/node-util-lib.git#${TAG}"
