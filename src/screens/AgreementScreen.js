import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import AwesomeButton from "./../components/Button";
import TermOfUse from './../components/TermOfUse';
import PrivacyPolicy from './../components/PrivacyPolicy';

export default class AgreenmentScreen extends Component {
	state = {
		modalVisible1: false,
		modalVisible2: false,
		animationType1: 'slide',
		animationType2: 'slide',
		completed1: false,
		completed2: false,
		completed3: false,
	}
	setModal1(visible) {
		this.setState({modalVisible1: visible});
	}
	setModal2(visible) {
		this.setState({modalVisible2: visible});
	}
	setCheckAll() {
		this.setState({completed1: !this.state.completed1, completed2: !this.state.completed1, completed3: !this.state.completed3});
	};
	setCheck2() {
		this.setState({completed2: !this.state.completed2});
		if (this.state.completed3 == true) {
			this.state.completed1 = !this.state.completed1;
		}
	};
	setCheck3() {
		this.setState({completed3: !this.state.completed3});
		if (this.state.completed2 == true) {
			this.state.completed1 = !this.state.completed1;
		}
	};
	render() {
		const {navigation} = this.props;
		return(
			<View style={styles.container}>
				<View style={styles.contents}>
					<View style={styles.mainList}>
						<View>
							<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheckAll();}}>
								{
									this.state.completed1? <Image style={{height: 25, width: 25}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
								}
								<Text style={{marginLeft: 5}}>전체동의</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.list}>
						<View>
							<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheck2();}}>
								{
									this.state.completed2? <Image style={{height: 25, width: 25}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
								}
								<Text style={{marginLeft: 5}}>이용약관</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={() => {this.setModal1(!this.state.modalVisible1);}}><Text>[더보기]</Text></TouchableOpacity>
					</View>
					<View style={styles.list}>
						<View>
							<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheck3();}}>
								{
									this.state.completed3? <Image style={{height: 25, width: 25}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
								}
								<Text style={{marginLeft: 5}}>개인정보수집 및 이용동의</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity onPress={() => {this.setModal2(!this.state.modalVisible2);}}><Text>[더보기]</Text></TouchableOpacity>
					</View>
				</View>

				<Modal visible={this.state.modalVisible1} animationType={this.state.animationType1}>
					<TouchableOpacity style={styles.exitBtn} onPress={() => {this.setModal1(false);}}><Text>닫기</Text></TouchableOpacity>
					<View style={styles.topCont}>
						<TermOfUse />
					</View>
					<View style={styles.bottomCont}>
						<View>
							<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheck2();}}>
								{
									this.state.completed2? <Image style={{height: 25, width: 25}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
								}
								<Text>동의합니다.</Text>
							</TouchableOpacity>
						</View>
						<View style={{marginTop: 20}}>
							<AwesomeButton onPress={() => {this.setModal1(false);}} title={'확인'} />
						</View>
					</View>
				</Modal>
				<Modal visible={this.state.modalVisible2} animationType={this.state.animationType2}>
					<TouchableOpacity style={styles.exitBtn} onPress={() => {this.setModal2(false);}}><Text>닫기</Text></TouchableOpacity>
					<View style={styles.topCont}>
						<PrivacyPolicy />
					</View>
					<View style={styles.bottomCont}>
						<View>
							<TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {this.setCheck3();}}>
								{
									this.state.completed3? <Image style={{height: 25, width: 25}} source={require('./../images/checked.png')}/> : <Image style={{height: 25, width: 25}} source={require('./../images/checkbox.png')}/>
								}
								<Text>동의합니다.</Text>
							</TouchableOpacity>
						</View>
						<View style={{marginTop: 20}}>
							<AwesomeButton onPress={() => {this.setModal2(false);}} title={'확인'} />
						</View>
					</View>
				</Modal>

				<View>
					<AwesomeButton onPress={() => {navigation.navigate('SignupFormScreen');}} title={'다음'} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contents: {
		height: '80%',
		paddingTop: 50,
		paddingLeft: 30,
		paddingRight: 40,
	},
	mainList: {
		borderBottomWidth: 1,
		borderBottomColor: '#c2c2c2',
		paddingBottom: 15,
		marginBottom: 10,
	},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 15,
	},
	btnMore: {
		marginLeft: 20,
	},
	btnMoreText: {
		color: '#ad7f18',
	},
	exitBtn: {
		position: 'absolute',
		top: 30,
		right: 30,
		zIndex: 1,
	},
	topCont: {
		height: '75%',
		paddingTop: 40,
		paddingRight: 30,
		paddingLeft: 30,
	},
	bottomCont: {
		paddingTop: 25,
		alignItems: 'center',
	},
	buttonContainer: {
		alignItems: 'center',
		zIndex: 1,
	}
});
