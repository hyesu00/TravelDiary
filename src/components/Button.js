import React, {Component} from 'react';
import {View, StyleSheet,} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default class Button extends Component {
	//버튼 기본형
	static defaultProps = {
		title: 'untitled',
		backgroundColor: '#fdd16e',
		backgroundDarker: '#ad7f18',
		width: 150,
		height: 50,
		textColor: '#333',
		onPress: () => null,
	}

	constructor(props){ 
		super(props);
	}

	render() {
		return(
			<View style={{alignItems: "center"}}>
				<AwesomeButton onPress={this.props.onPress} backgroundColor={this.props.backgroundColor} backgroundDarker={this.props.backgroundDarker} width={this.props.width} height={this.props.height} textColor={this.props.textColor}>
						{this.props.title}
				</AwesomeButton>
			</View>
		)
	}
}