import pkg from './package.json';
import typescript from 'rollup-plugin-typescript';
import {uglify} from 'rollup-plugin-uglify';

const input = './src/index.ts';
const external = ['react', 'react-dom'];
const plugins = [
	typescript({
		tsconfig: './tsconfig.json'
	})
];

export default {
	input,
	external,
	output: {
		file: pkg.main,
		format: 'cjs'
	},
	plugins: [
		...plugins,
		uglify({
			sourcemap: false
		})
	]
};
