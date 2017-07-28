import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class <%= componentNameRaw %> extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>{this.props.hello}</Text>
			</View>
		)
	}
}

 <%= componentNameRaw %>.propTypes = {
  hello: PropTypes.string
}
