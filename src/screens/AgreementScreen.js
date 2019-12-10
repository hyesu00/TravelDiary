import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class AgreenmentScreen extends Component {
	render() {
		const {navigation} = this.props;
		return(
			<View style={styles.container}>
				<Text>AgreenmentScreen</Text>
				<TouchableOpacity onPress={() => {navigation.navigate('SignupFormScreen');}}>
					<Text>다음</Text>
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
