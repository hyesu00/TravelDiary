import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class Checkbox extends Component {
	constructor(props){ 
		super(props);
		this.state = {
			completed: false,
		}
	}
	static defaultProps = {
		id: '0',
		iconWidth: 25,
		iconHeight: 25,
		text: '체크박스',
		fontSize: 15,
		fontWeight: '400',
		onPress: () => null,
	}
	setCheck() {
		this.setState({completed: !this.state.completed});
	};
	render() {
		return(
			<View key={this.props.id}>
				<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheck();}}>
					{
						this.state.completed? <Image style={{height: this.props.iconHeight, width: this.props.iconWidth}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
					}
					<Text style={{marginLeft: 5, fontSize: this.props.fontSize, fontWeight: this.props.fontWeight}}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
