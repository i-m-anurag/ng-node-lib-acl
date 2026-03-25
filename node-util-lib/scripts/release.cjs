const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: "inherit" });

const pkg = require("../package.json");
const version = process.argv[2] || pkg.version;
const tag = `v${version}`;
const sourceDir = path.resolve(__dirname, "..");
const releaseDir = fs.mkdtempSync(path.join(os.tmpdir(), "release-"));

// 1. Build
console.log(`\nBuilding ${tag}...\n`);
run("npm run build", sourceDir);

// 2. Copy dist + package.json to temp dir
const distDir = path.join(sourceDir, "dist");
fs.cpSync(distDir, releaseDir, { recursive: true });

for (const f of ["README.md", "LICENSE"]) {
  const src = path.join(sourceDir, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(releaseDir, f));
}

// 3. Write clean package.json
const cleanPkg = {
  name: pkg.name,
  version,
  description: pkg.description,
  type: pkg.type,
  main: "./node-util-lib.cjs",
  module: "./node-util-lib.js",
  types: "./index.d.ts",
  exports: {
    ".": {
      import: { types: "./index.d.ts", default: "./node-util-lib.js" },
      require: { types: "./index.d.cts", default: "./node-util-lib.cjs" },
    },
  },
  peerDependencies: pkg.peerDependencies,
  peerDependenciesMeta: pkg.peerDependenciesMeta,
};
fs.writeFileSync(path.join(releaseDir, "package.json"), JSON.stringify(cleanPkg, null, 2));

// 4. Git init, commit, push
let remoteUrl = "";
try { remoteUrl = execSync("git remote get-url origin", { cwd: sourceDir }).toString().trim(); } catch {}

run("git init", releaseDir);
run("git checkout -b release", releaseDir);
run("git add -A", releaseDir);
run(`git commit -m "release: ${tag}"`, releaseDir);

if (!remoteUrl) {
  console.log(`\nNo remote found. Release ready at: ${releaseDir}`);
  console.log(`  git remote add origin <url>`);
  console.log(`  git push origin release --force`);
  console.log(`  git tag ${tag} && git push origin ${tag}`);
  process.exit(0);
}

run(`git remote add origin ${remoteUrl}`, releaseDir);
run("git push origin release --force", releaseDir);
run(`git tag ${tag}`, releaseDir);
run(`git push origin ${tag}`, releaseDir);

// 5. Cleanup
fs.rmSync(releaseDir, { recursive: true, force: true });

console.log(`\nReleased ${tag}`);
console.log(`\nInstall with:`);
console.log(`  npm install git+ssh://git@github.com:<org>/node-util-lib.git#${tag}`);
