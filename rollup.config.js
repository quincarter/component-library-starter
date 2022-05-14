import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import { terser } from 'rollup-plugin-terser';

const PACKAGE_ROOT_PATH = process.cwd();
const { LERNA_PACKAGE_NAME } = process.env;

export default {
  input: `${PACKAGE_ROOT_PATH}/index.js`,
  output: [
    {
      file: `dist/${LERNA_PACKAGE_NAME}.cjs.js`,
      format: 'cjs',
    },
    {
      file: `dist/${LERNA_PACKAGE_NAME}.esm.js`,
      format: 'esm',
    },
    {
      name: LERNA_PACKAGE_NAME,
      file: `dist/${LERNA_PACKAGE_NAME}.umd.js`,
      format: 'umd',
    },
  ],
  preserveEntrySignatures: false,

  plugins: [
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify JS */
    terser(),
    /** Bundle assets references via import.meta.url */
    importMetaAssets(),
    /** Compile JS to a lower language target */
    babel({
      babelHelpers: 'bundled',
      presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            targets: [
              'last 3 Chrome major versions',
              'last 3 Firefox major versions',
              'last 3 Edge major versions',
              'last 3 Safari major versions',
            ],
            modules: false,
            bugfixes: true,
          },
        ],
      ],
      plugins: [
        [
          require.resolve('babel-plugin-template-html-minifier'),
          {
            modules: { lit: ['html', { name: 'css', encapsulation: 'style' }] },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
  ],
};
