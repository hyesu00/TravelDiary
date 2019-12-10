import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class SignupFormScreen extends Component {
	render() {
		const {navigation} = this.props;
		return(
			<View style={styles.container}>
				<Text>SignupFormScreen</Text>
				<TouchableOpacity onPress={() => {navigation.navigate('LoginScreen');}}>
					<Text>확인</Text>
				</TouchableOpacity>
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