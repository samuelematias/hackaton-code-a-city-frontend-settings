import { StyleSheet, Platform } from 'react-native';
import { Metrics, ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	container: {
		paddingBottom: Metrics.baseMargin
	},
	logo: {
		marginTop: Metrics.doubleSection,
		height: Metrics.images.logo,
		width: Metrics.images.logo,
		resizeMode: 'contain'
	},
	centered: {
		alignItems: 'center'
	},

	iconHeader: {
		height: 20,
		width: 20
	},
	wrapperTabBarLabel: {
		marginTop: Platform.OS === 'ios' ? 15 : 0
	},
	label: {
		textAlign: 'center',
		fontSize: 10
	},
	wrapperItem: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		margin: 16
	},
	headerLabelStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	},
	wrapperHeaderLeft: {
		marginLeft: 16
	},
	wrapperHeaderRight: {
		marginRight: 16
	},
	wrapperSwipeableCard: {
		width: 240,
		// marginRight: 10,
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	thumbnailSwipeableCard: {
		borderRadius: 3,
		width: 260,
		height: 140,
		marginBottom: 0
	},
	titleSwipeableCard: {
		fontWeight: 'normal',
		fontSize: 18,
		color: Colors.lightgrey
	},
	hoursSwipeableCard: {
		fontWeight: 'normal',
		fontSize: 12,
		color: Colors.skinnerBlack
	},
	iconHourSwipeableCard: {
		width: 10,
		height: 10
	},
	wrapperHour: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 16
	},
	iconFreeSwipeableCard: {
		width: 40,
		height: 18
	}
});
