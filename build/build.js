const path = require('path');
const buble = require('@rollup/plugin-buble');
const terser = require('rollup-plugin-terser').terser;
const rollupResolve = require('rollup-plugin-node-resolve');
const ts = require('rollup-plugin-typescript2');
const alias = require('@rollup/plugin-alias');
const commonjs = require('rollup-plugin-commonjs');
const sizeSnapshot = require('rollup-plugin-size-snapshot').sizeSnapshot;

const resolve = _path => path.resolve(__dirname, '../', _path);
const name = 'uuConsole';
const input = resolve('src/index.ts');
const sizeStore = resolve('src/data/size/index.ts');
const themeStore = resolve('src/data/theme/index.ts');

const extensions = ['.js', '.ts'];

const tsPlugin = ts({
  tsconfig: resolve('./tsconfig.json'),
  tsconfigOverride: {
    compilerOptions: {
      sourceMap: false,
      declaration: true,
      declarationMap: false,
    },
    exclude: ['**/__tests__'],
  },
  extensions,
});

/*
 * (!) this has been rewritten to undefined
 * https://github.com/rollup/rollup/issues/794
 */
const fixUndefinedThis = {
  onwarn: warning => {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
  },
};

const aliasConfig = () =>
  alias({
    entires: [{ find: '@', replacement: '../src' }],
  });

export default [
  // uu-console.js
  {
    input,
    output: [
      {
        file: resolve('dist/uu-console.umd.js'),
        format: 'umd',
        exports: 'default',
        sourcemap: false,
        name,
      },
      {
        file: resolve('dist/uu-console.esm.js'),
        format: 'es',
        exports: 'named',
        sourcemap: false,
      },
    ],
    ...fixUndefinedThis,
    plugins: [
      aliasConfig(),

      rollupResolve(extensions),

      commonjs(),

      tsPlugin,

      buble({
        transform: { forOf: false },
        exclude: 'node_modules/**',
      }),

      sizeSnapshot(),

      terser(),
    ],
  },
  // size.js
  {
    input: sizeStore,
    output: [
      {
        file: resolve('dist/size/size.umd.js'),
        format: 'umd',
        exports: 'default',
        sourcemap: false,
        name: 'uuSizes',
      },
      {
        file: resolve('dist/size/size.esm.js'),
        format: 'es',
        exports: 'named',
        sourcemap: false,
      },
    ],
    ...fixUndefinedThis,
    plugins: [
      aliasConfig(),

      commonjs(),

      tsPlugin,

      buble({
        transform: { forOf: false },
        exclude: 'node_modules/**',
      }),

      sizeSnapshot(),

      terser(),
    ],
  },
  // esm theme.js
  {
    input: themeStore,
    output: [
      {
        file: resolve('dist/theme/theme.umd.js'),
        format: 'umd',
        exports: 'default',
        sourcemap: false,
        name: 'uuThemes',
      },
      {
        file: resolve('dist/theme/theme.esm.js'),
        format: 'es',
        exports: 'named',
        sourcemap: false,
      },
    ],
    ...fixUndefinedThis,
    plugins: [
      aliasConfig(),

      commonjs(),

      tsPlugin,

      buble({
        transform: { forOf: false },
        exclude: 'node_modules/**',
      }),

      sizeSnapshot(),

      terser(),
    ],
  },
];
