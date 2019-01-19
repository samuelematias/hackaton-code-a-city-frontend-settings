import React, { Component } from 'react';
import { View } from 'react-native';

import AppNavigation from '../Navigation/AppNavigation';
import { StatusBarColor } from '../Components/Common';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
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
