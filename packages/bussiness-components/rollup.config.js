const path = require('path'); 
const babel = require('rollup-plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const extensions = ['.js', '.ts', '.tsx'];

module.exports = {
  input: './src/index.ts',
  output: {
    file: './lib/main.js',
    format: 'esm',
  },
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
}