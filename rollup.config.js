import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import cli from 'rollup-plugin-cli';
import executable from 'rollup-plugin-executable';

export default {
  input: 'cli.js',
  output: {
    file: 'cli.bundle.js',
    format: 'cjs',
  },
  plugins: [
    cli(),
    executable(),
    autoExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
};
