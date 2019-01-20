import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { Images, Colors } from '../Themes';
import { Button } from '../Components/Common';

// Styles
import styles from './Styles/LessonDetailStyles';

class LessonDetailScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { navigation } = this.props;
		const lessonTitle = 'Digital Marketing 101';
		const lessonDescription =
			'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus. Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum';
		return (
			<ScrollView style={{ flex: 1 }}>
				<Image
					source={Images.lessonDetail}
					style={styles.containerBackground}
					resizeMode={'stretch'}
				/>
				<View style={styles.buttonAbsolute}>
					<TouchableOpacity
						style={styles.wrapperHeaderLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							style={styles.iconArrowLeft}
							source={Images.iconArrowLeftWhite}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.wrapperSectionTitle}>
					<View>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.sectionTitleStyle}
						>
							{'Digital Marketing 101'}
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={{
								fontWeight: 'normal',
								fontSize: 10,
								color: Colors.skinnerBlack,
								opacity: 0.6
							}}
						>
							{'descrição'.toUpperCase()}
						</Text>
					</View>
					<View style={{ marginTop: 10 }}>
						<Text
							numberOfLines={10}
							ellipsizeMode={'tail'}
							style={{
								fontWeight: 'normal',
								fontSize: 14,
								color: Colors.skinnerBlack
							}}
						>
							{lessonDescription}
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={{
								fontWeight: 'normal',
								fontSize: 10,
								color: Colors.skinnerBlack,
								opacity: 0.6
							}}
						>
							{'Video'.toUpperCase()}
						</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}

export default LessonDetailScreen;
