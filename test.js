'use strict';
import path from 'path';
import test from 'ava';
import helpers from 'yeoman-test';
import assert from 'yeoman-assert';

test.serial('Test standard scaffold', async t => {
	await helpers
		.run(path.join(__dirname, '/app'))
		.withPrompts({
			componentNameRaw: 'helloWorld',
			githubUsername: 'tester',
			website: 'helloworld',
			prefixReactNative: true
		});

	// Core Code Intact
	t.notThrows(() => assert.file([
		'.babelrc',
		'.gitignore',
		'.travis.yml',
		'__tests__/Hello-World.test.js',
		'components/Hello-World.js',
		'LICENSE',
		'package.json',
		'readme.md'
	]));

	// Tpl Assertions
	t.notThrows(() => assert.fileContent([
		['__tests__/Hello-World.test.js', /helloWorld/],
		['components/Hello-World.js', /helloWorld/],
		['package.json', /react-native-hello-world/],
		['readme.md', /https:\/\/img.shields.io\/travis\/tester\/react-native-hello-world.svg/]
	]));

	// Check to see no strangling template tags
	t.notThrows(() => assert.noFileContent([
		['__tests__/Hello-World.test.js', /<%.*%>/],
		['components/Hello-World.js', /<%.*%>/],
		['lICENSE', /<%.*%>/],
		['package.json', /<%.*%>/],
		['readme.md', /<%.*%>/]
	]));
});
