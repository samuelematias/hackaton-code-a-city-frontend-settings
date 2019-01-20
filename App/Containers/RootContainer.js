import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import AppNavigation from '../Navigation/AppNavigation';
import { StatusBarColor } from '../Components/Common';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
	componentDidMount() {
		this._onInitializeApp();
	}
	_onInitializeApp = () => {
		// Initialize Firebase
		return firebase.initializeApp({
			apiKey: 'AIzaSyAwFtUEijpONqO-bb7ib79mk9uY_3v0eTY',
			authDomain: 'jambo-tech-73914.firebaseapp.com',
			databaseURL: 'https://jambo-tech-73914.firebaseio.com',
			projectId: 'jambo-tech-73914',
			storageBucket: 'jambo-tech-73914.appspot.com',
			messagingSenderId: '450730525637'
		});
	};
	render() {
		return (
			<View style={styles.applicationView}>
				<StatusBarColor backgroundColor="#e36d0d" barStyle="light-content" />
				<AppNavigation />
			</View>
		);
	}
}

export default RootContainer;
