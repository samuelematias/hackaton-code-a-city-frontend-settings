import React, { Component } from 'react';
import { View } from 'react-native';

import { StatusBarColor } from '../Components/Common';
import AppNavigation from '../Navigation/AppNavigation';

// Styles
import styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
	render() {
		return (
			<View style={styles.applicationView}>
				<StatusBarColor backgroundColor="#fff" barStyle="light-content" />
				<AppNavigation />
			</View>
		);
	}
}

export default RootContainer;
