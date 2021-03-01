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

const plugins = [
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
];

function output(file, dir){
	if(dir)
		return [
			{ dir: "dist/cjs/", format: 'cjs' },
			// { dir: "dist/es/", format: 'es' }
		];

	return [
		{ file: "dist/cjs/"+file, format: 'cjs' },
		// { file: "dist/es/"+file, format: 'es' }
	];
};

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'Articulate',
			file: pkg.browser,
			format: 'umd'
		},
		plugins
	},
	{
		input: 'src/field-editor.js',
		output: {
			name: 'ArticulateFieldEditor',
			file: "dist/umd/field-editor.js",
			format: 'umd'
		},
		plugins
	},
	{
		input: 'src/component-editor.js',
		output: {
			name: 'ArticulateComponentEditor',
			file: "dist/umd/component-editor.js",
			format: 'umd'
		},
		plugins
	},
	// {
	// 	input: 'src/component-picker.js',
	// 	output: {
	// 		name: 'ArticulateComponentPicker',
	// 		file: "dist/umd/component-picker.js",
	// 		format: 'umd'
	// 	},
	// 	plugins
	// },
	{
		input: 'src/main.js',
		output: output("articulate.js"),
		plugins
	},
	{
		input: 'src/field-editor.js',
		output: output("field-editor.js"),
		plugins
	},
	{
		input: 'src/component-editor.js',
		output: output("component-editor.js"),
		plugins
	},
	{
		input: 'src/component-picker.js',
		output: output("component-picker.js", true),
		plugins
	},
];
