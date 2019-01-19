import React, { Component } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import { Images, Colors } from '../Themes';

// Styles
import styles from './Styles/HomeScreenStyles';

class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null,
		tabBarIcon: ({ focused }) => {
			if (focused) {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeActive}
						resizeMode={'contain'}
					/>
				);
			} else {
				return (
					<Image
						style={styles.iconHeader}
						source={Images.iconHomeInactive}
						resizeMode={'contain'}
					/>
				);
			}
		},
		tabBarLabel: ({ focused }) => (
			<View style={styles.wrapperTabBarLabel}>
				<Text
					style={[
						styles.label,
						{
							color: focused ? Colors.black : Colors.greyAccent
						}
					]}
				>
					{'Cursos'}
				</Text>
			</View>
		)
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					<View style={styles.centered}>
						<Image source={Images.launch} style={styles.logo} />
					</View>

					<View style={styles.section} />
				</ScrollView>
			</View>
		);
	}
}

export default HomeScreen;
