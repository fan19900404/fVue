import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

import { name, version, author } from './package.json';

const banner = `
/*!
* ${name} v${version}
* (c) 2017-${new Date().getFullYear()} ${author}
* Released under the MIT License.
*/
`.trim();

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/fvue.min.js',
      format: 'iife',
      // format: 'umd',
      name: 'Vue',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      babel({}),
      uglify({
        output: {
          preamble: banner,
        },
      }),
    ],
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/fvue.js',
      format: 'iife',
      name: 'Vue',
      sourcemap: false,
    },
    plugins: [resolve(), babel({})],
  },
];
