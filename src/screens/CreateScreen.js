import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class CreateScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>CreateScreen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});