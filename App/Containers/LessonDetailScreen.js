import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	ImageBackground
} from 'react-native';
import { Images } from '../Themes';
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
		return (
			<ScrollView style={{ flex: 1 }}>
				<Image
					source={Images.lessonDetail}
					style={styles.containerBackground}
					resizeMode={'stretch'}
				/>
				<View style={{ position: 'absolute', top: 50, left: 20 }}>
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
				<View
					style={{
						alignSelf: 'center',
						backgroundColor: 'red'
					}}
				/>
			</ScrollView>
		);
	}
}

export default LessonDetailScreen;
