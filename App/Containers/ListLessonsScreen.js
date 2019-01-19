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

	_renderSwipeableCardsList = () => {
		const data = [
			{
				id: '1',
				thumbnail: Images.iconLesson1,
				title: 'Engenharia Civil 1',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus.',
				totalHours: 10
			},
			{
				id: '2',
				thumbnail: Images.iconLesson2,
				title: 'Engenharia Civil 2',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus.',
				totalHours: 1
			},
			{
				id: '3',
				thumbnail: Images.iconLesson1,
				title: 'Engenharia Civil 3',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus.',
				totalHours: 30
			},
			{
				id: '4',
				thumbnail: Images.iconLesson2,
				title: 'Engenharia Civil 4',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus',
				totalHours: 40
			},
			{
				id: '5',
				thumbnail: Images.iconLesson1,
				title: 'Engenharia Civil 5',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus',
				totalHours: 50
			},
			{
				id: '6',
				thumbnail: Images.iconLesson2,
				title: 'Engenharia Civil 6',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus',
				totalHours: 60
			},
			{
				id: '7',
				thumbnail: Images.iconLesson1,
				title: 'Engenharia Civil 7',
				about:
					'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus',
				totalHours: 70
			}
		];
		return (
			<View>
				<FlatList
					data={data}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => this._renderSwipeableCard(item)}
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
						<View style={styles.wrapperSwipeableCardsList} />
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default ListLessonsScreen;
