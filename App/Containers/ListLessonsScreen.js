import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Images, Colors } from '../Themes';
import { Button } from '../Components/Common';
import { RandomColor } from '../Lib/Utils';

// Styles
import styles from './Styles/ListLessonsStyle';

class ListLessonsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		header: null
	});

	constructor(props) {
		super(props);

		this.state = {};
	}

	_keyExtractor = item => item.id;

	_renderLesson = (item, index) => {
		const lessonId = item.id;
		const lessonTitle = item.title;
		const lessonAbout = item.about;
		let i = index + 1;
		return (
			<TouchableOpacity key={lessonId} style={styles.contentLesson}>
				<View
					style={[
						styles.wrapperRadius,
						{
							backgroundColor: RandomColor()
								.toLowerCase()
								.includes('fff')
								? '#944dff'.toLowerCase()
								: RandomColor().toLowerCase()
						}
					]}
				>
					<Text style={styles.lessonNumber}>{i}</Text>
				</View>
				<View style={{ paddingLeft: 20 }}>
					<Text style={styles.lessonTitle}>{lessonTitle}</Text>
					<Text style={styles.lessonAbout}>{lessonAbout}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	_renderLessonsList = () => {
		const data = [
			{
				id: '1',
				title: 'UI Design for the Web',
				about: 'Get started with the basics.'
			},
			{
				id: '2',
				title: 'Web for the UI Design',
				about: 'Get started with the basics.'
			}
		];
		return (
			<View>
				<FlatList
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => this._renderLesson(item, index)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	};

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperSectionTitle}>
					<TouchableOpacity
						style={styles.wrapperHeaderLeft}
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Image
							style={styles.iconArrowLeft}
							source={Images.iconArrowLeftOrange}
							resizeMode={'contain'}
						/>
					</TouchableOpacity>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.sectionTitleStyle}
					>
						{'Lessons'}
					</Text>
				</View>
				<ScrollView style={styles.container}>
					<View style={styles.wrapperContent}>
						<View style={styles.wrapperSwipeableCardsList}>
							{this._renderLessonsList()}
						</View>
						<View>
							<Button
								labelButton={'Iniciar Quiz'}
								buttonStyle={styles.actionButtonStyle}
								onPress={() => {}}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default ListLessonsScreen;
