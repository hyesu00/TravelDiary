import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class LoginScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>LoginScreen</Text>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('AgreementScreen')}>
					<Text>회원가입</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
					<Text>로그인</Text>
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