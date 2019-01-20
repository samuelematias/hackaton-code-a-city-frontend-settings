import React from 'react';
import { Platform } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { Colors } from '../Themes';

import LaunchScreen from '../Containers/LaunchScreen';
import NewsScreen from '../Containers/NewsScreen';
import AboutScreen from '../Containers/AboutScreen';
import WelcomeScreen from '../Containers/WelcomeScreen';
import InputScreen from '../Containers/InputScreen';
import LoginScreen from '../Containers/LoginScreen';
import CourseScreen from '../Containers/CourseScreen';
import ListLessonsScreen from '../Containers/ListLessonsScreen';
import LessonDetailScreen from '../Containers/LessonDetailScreen';

const TabNav = TabNavigator(
	{
		CourseScreenTab: {
			screen: CourseScreen
		},
		NewsScreenTab: {
			screen: NewsScreen
		},
		AboutScreenTab: {
			screen: AboutScreen
		}
	},
	{
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false,
		initialRouteName: 'NewsScreenTab',
		tabBarOptions: {
			showLabel: true,
			showIcon: true,
			style: {
				backgroundColor: '#fff'
			},
			tabStyle: {
				borderTopWidth: 1,
				borderTopColor: '#ececec',
				flex: 1
			},
			labelStyle: {
				fontSize: 12,
				color: '#c1c1c1',
				paddingBottom: 3
			},
			indicatorStyle: {
				backgroundColor: 'transparent'
			}
		}
	}
);

const AppNavigation = StackNavigator(
	{
		TabRoot: { screen: TabNav },
		Welcome: { screen: WelcomeScreen },
		Input: { screen: InputScreen },
		Login: { screen: LoginScreen },
		Lessons: { screen: ListLessonsScreen },
		LessonDetail: { screen: LessonDetailScreen }
	},
	{
		headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
		initialRouteName: 'TabRoot',
		/* header main config. */
		navigationOptions: {
			headerStyle: {
				backgroundColor: Colors.purpleAccent
			},
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default AppNavigation;
