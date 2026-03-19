import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NodeUtilLib',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'node-util-lib.js' : 'node-util-lib.cjs'),
    },
    rollupOptions: {
      external: [
        'express',
        /^node:/,
        'crypto',
        'fs',
        'path',
        'os',
        'http',
        'https',
        'stream',
        'url',
        'util',
        'events',
      ],
    },
    target: 'node18',
    sourcemap: true,
    minify: false,
  },
});
