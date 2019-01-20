import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	wrapperInfo: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
		height:
			Platform.OS === 'ios'
				? Metrics.screenHeight - 50
				: Metrics.screenHeight - 70,
		flex: 1
	}
});
