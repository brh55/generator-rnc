import { Text, View } from 'react-native';
import React from 'react';
import <%= componentNameRaw %> from '../components/<%= componentName %>.js';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const tree = renderer.create(
	<<%= componentNameRaw %>
	  hello={'Hello world!'} />
).toJSON();

test('Render properly', () => {
	const hello = tree.children[0].children[0];
	expect(hello).toBe('Hello world!');
});

test('Snapshot match', () => {
  expect(tree).toMatchSnapshot();
});
