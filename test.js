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
			website: 'helloworld'
		});

	// Core Code Intact
	t.notThrows(() => assert.file([
		'package.json',
		'.travis.yml',
		'.babelrc',
		'.gitignore',
		'readme.md',
		'components/Hello-World.js',
		'__tests__/Hello-World.test.js'
	]));

	// Tpl Assertions
	t.notThrows(() => assert.fileContent([
		['readme.md', /https:\/\/img.shields.io\/travis\/tester\/hello-world.svg/],
		['components/Hello-World.js', /helloWorld/],
		['__tests__/Hello-World.test.js', /helloWorld/]
	]));

	// Check to see no strangling template tags
	t.notThrows(() => assert.noFileContent([
		['readme.md', /<%.*%>/],
		['package.json', /<%.*%>/],
		['components/Hello-World.js', /<%.*%>/],
		['__tests__/Hello-World.test.js', /<%.*%>/]
	]));
});
