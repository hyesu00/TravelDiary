import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import AwesomeButton from "./../components/Button";

export default class SignupFormScreen extends Component {
	render() {
		const {navigation} = this.props;
		return(
			<View style={styles.container}>
				<View style={styles.contents}>
					<View style={{borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput placeholder="Enter Your ID"/></View>
					<View style={{marginTop: 10, borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput placeholder="Enter Your PW"/></View>
					<View style={{marginTop: 10, borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput placeholder="Enter Your PW Again"/></View>
					<View style={{marginTop: 10, marginBottom: 15, borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput placeholder="Enter Your Email"/></View>
				</View>

				<View>
					<AwesomeButton onPress={() => {navigation.navigate('LoginScreen');}} title={'확인'} />
				</View>
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
	contents: {
		height: '69%',
		paddingTop: 50,
		paddingLeft: 30,
		paddingRight: 40,
	},
});