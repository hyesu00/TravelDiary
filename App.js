import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './src/screens/LoginScreen';
import AgreementScreen from './src/screens/AgreementScreen';
import SignupFormScreen from './src/screens/SignupFormScreen';
import MainScreen from './src/screens/MainScreen';
import CategoryListScreen from './src/screens/CategoryListScreen';
import DiaryListScreen from './src/screens/DiaryListScreen';
import CreateScreen from './src/screens/CreateScreen';
import MypageScreen from './src/screens/MypageScreen';
import SettingScreen from './src/screens/SettingScreen';

// 메인 메뉴 토글 버튼
class NavigationDrawerStructure extends Component {
	toggleDrawer = () => {
		this.props.navigationProps.toggleDrawer();
	};
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
					<Text>메뉴 열기</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

// 메인 메뉴 헤더
const DrawerContent = (props) => (
	<View>
		<View
			style={{backgroundColor: 'skyblue', height: 240, alignItems: 'center', justifyContent: 'center',}}>
			<Text style={{ color: 'white', fontSize: 30 }}>
				Header
			</Text>
		</View>
		<DrawerItems {...props} />
	</View>
)

// 회원가입 페이지
const SignupStack = createStackNavigator(
	{
		LoginScreen: {
			screen: LoginScreen,
			navigationOptions: ({navigation}) => ({
				header: null,
			}),
		},
		AgreementScreen,
		SignupFormScreen,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '회원가입',
		}),
	}
);

// 메인 페이지
const MainStack = createStackNavigator(
	{
		MainScreen: {
			screen: MainScreen,
			navigationOptions: ({navigation}) => ({
				title: '메인 화면',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);


// 일기 목록 페이지
const ListStack = createStackNavigator(
	{
		CategoryListScreen: {
			screen: CategoryListScreen,
			navigationOptions: ({navigation}) => ({
				title: '카테고리',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
		DiaryListScreen,
	}
);

// 일기 작성 페이지
const CreateStack = createStackNavigator(
	{
		CreateScreen: {
			screen: CreateScreen,
			navigationOptions: ({navigation}) => ({
				title: '일기 작성',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);

// 마이 페이지
const MyPageStack = createStackNavigator(
	{
		MypageScreen: {
			screen: MypageScreen,
			navigationOptions: ({navigation}) => ({
				title: '마이페이지',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);

// 환경설정 페이지
const SettingStack = createStackNavigator(
	{
		SettingScreen: {
			screen: SettingScreen,
			navigationOptions: ({navigation}) => ({
				title: '환경설정',
				headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>
			}),
		},
	}
);

// 메인 메뉴 생성
const DrawerStack = createDrawerNavigator(
	{
		MainStack,
		ListStack,
		CreateStack,
		MyPageStack,
		SettingStack,
	},
	{
		contentComponent: DrawerContent,
	}
);

// 로그인 페이지에서 회원가입, 메인 페이지로 각각 이동이 가능
const AppNavigator = createStackNavigator(
	{
		First: LoginScreen,
		Signup: SignupStack,
		Main: DrawerStack,
	},
	{
		defaultNavigationOptions: ({navigation}) => ({
			title: '로그인',
		}),
		initialRouteName: 'First', headerMode: 'none',
	}
);

export default createAppContainer(AppNavigator);