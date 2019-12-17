import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, TextInput} from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import Button from './../components/Button';

export default class LoginScreen extends Component {
	state = { user: null };

	componentDidMount() {
		this.initAsync();
	}

	initAsync = async () => {
		await GoogleSignIn.initAsync({
		clientId: '<YOUR_IOS_CLIENT_ID>',
		});
		this._syncUserWithStateAsync();
	};

	_syncUserWithStateAsync = async () => {
		const user = await GoogleSignIn.signInSilentlyAsync();
		this.setState({ user });
	};

	signOutAsync = async () => {
		await GoogleSignIn.signOutAsync();
		this.setState({ user: null });
	};

	signInAsync = async () => {
		try {
		await GoogleSignIn.askForPlayServicesAsync();
		const { type, user } = await GoogleSignIn.signInAsync();
		if (type === 'success') {
			this._syncUserWithStateAsync();
			alert('login: successs2:');
		}
		} catch ({ message }) {
		alert('login: Error:' + message);
		}
	};

	/* 로그인, 로그아웃 
	state = {user: null};

	signInAsync = async () => {
		try {
			await GoogleSignIn.askForPlayServicesAsync();
			const { type, user } = await GoogleSignIn.signInAsync();
			if (type === 'success') {
			// ...
			alert('login: successs1:');
			}
		} catch ({ message }) {
			alert('login: Error:' + message);
		}
	};

	signOutAsync = async () => {
		try {
			await GoogleSignIn.signOutAsync();
			this.setState({ user: null });
		} catch ({ message }) {
			alert('signOutAsync: ' + message);
		}
	}; */

	onPress = () => {
		if (this.state.user) {
			this.signOutAsync();
		} else {
			this.signInAsync();
		}
	};
	
	render() {
		return(
			<View style={{flex: 1, alignItems: 'center'}}>
				<Image style={{marginTop: 60, marginBottom: 20}} source={require('../images/logo.png')}/>
				<View style={{borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput style={{paddingTop:5, paddingLeft:10}} placeholder="Enter Your ID"/></View>
				<View style={{marginTop: 10, marginBottom: 15, borderRadius: 5, width: 300, height: 40, borderColor: 'gray', borderWidth: 1, overflow:"hidden" }}><TextInput style={{paddingTop:5,paddingLeft:10}} placeholder="Enter Your PW"/></View>

				<Button width={300} height={43} textColor={'white'} title={'로그인!'} />

				<Text onPress={this.onPress}>google Login</Text>

				<View style={{flex: 1, flexDirection: 'row', marginTop: 40}}>
					<TouchableOpacity style={{width: 100, height: 40}} onPress={() => this.props.navigation.navigate('AgreementScreen')}>
						<Text style={{color: '#909090', textAlign: 'center'}}>회원가입</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{width: 100, height: 40}}>
						<Text style={{color: '#909090', textAlign: 'center'}}>id/pw 찾기</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}