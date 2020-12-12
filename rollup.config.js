import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import path from 'path';

import pkg from './package.json';

const isProduction = process.env.NODE_ENV === "production";

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'Articulate',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			babel({
				exclude: 'node_modules/**'
			}),
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			postcss({
				config: {
					path: "./postcss.config.js",
				},
				extensions: [".css"],
				extract: true,
				minimize: isProduction,
				// modules: true,
			}),
			isProduction && terser(),
			!isProduction && serve(),
			!isProduction && livereload({
				watch: [
					path.resolve(__dirname, 'dist'),
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'index.html')
				],
				exts: ['html', 'js', 'scss', 'sass', 'css']
			}),
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	
	// {
	// 	input: 'src/main.js',
	// 	output: [
	// 		{ file: pkg.main, format: 'cjs' },
	// 		{ file: pkg.module, format: 'es' }
	// 	]
	// },
];
