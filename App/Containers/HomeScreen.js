import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	Image,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { Images, Colors, Metrics } from '../Themes';

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

	_keyExtractor = item => item.id;

	_renderSwipeableGG = item => {
		const cardId = item.id;
		const cardThumbnail = item.thumbnail;
		const cardTitle = item.title;
		const cardAbout = item.about;
		const cardTotalHours =
			item.totalHours === 1
				? item.totalHours + ' Hora'
				: item.totalHours + ' Horas';
		return (
			<View>
				<TouchableOpacity
					key={cardId}
					style={styles.wrapperSwipeableCard}
					onPress={() => {}}
				>
					<Image
						source={cardThumbnail}
						style={styles.thumbnailSwipeableCard}
						resizeMode={'cover'}
					/>

					<View style={{ marginLeft: 18 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.titleSwipeableCard}
						>
							{cardTitle}
						</Text>
						<View style={{ marginTop: 10 }}>
							<Text
								numberOfLines={2}
								ellipsizeMode={'tail'}
								style={styles.aboutSwipeableCard}
							>
								{cardAbout}
							</Text>
						</View>
						<View style={styles.wrapperHour}>
							<View>
								<Image
									source={Images.iconFree}
									style={styles.iconFreeSwipeableCard}
									resizeMode={'cover'}
								/>
							</View>
							<View style={{ paddingLeft: 8 }}>
								<Image
									source={Images.iconBigClock}
									style={styles.iconHourSwipeableCard}
									resizeMode={'cover'}
								/>
							</View>
							<View style={{ paddingLeft: 5 }}>
								<Text
									numberOfLines={2}
									ellipsizeMode={'tail'}
									style={styles.hoursSwipeableCard}
								>
									{cardTotalHours}
								</Text>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	_renderSwipeableCard = item => {
		const cardId = item.id;
		const cardThumbnail = item.thumbnail;
		const cardTitle = item.title;
		const cardAbout = item.about;
		const cardTotalHours =
			item.totalHours === 1
				? item.totalHours + ' Hora'
				: item.totalHours + ' Horas';

		return (
			<TouchableOpacity style={styles.contentSwipeableCardsList}>
				<View style={styles.wrapperSwipeableCard}>
					<Image
						source={cardThumbnail}
						style={styles.thumbnailSwipeableCard}
						resizeMode={'contain'}
					/>
				</View>
				<View>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.titleSwipeableCard}
					>
						{cardTitle}
					</Text>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.aboutSwipeableCard}
					>
						{cardAbout}
					</Text>
				</View>
				<View style={styles.wrapperHour}>
					<View>
						<Image
							source={Images.iconFree}
							style={styles.iconFreeSwipeableCard}
							resizeMode={'cover'}
						/>
					</View>
					<View style={{ paddingLeft: 8 }}>
						<Image
							source={Images.iconBigClock}
							style={styles.iconHourSwipeableCard}
							resizeMode={'cover'}
						/>
					</View>
					<View style={{ paddingLeft: 5 }}>
						<Text
							numberOfLines={2}
							ellipsizeMode={'tail'}
							style={styles.hoursSwipeableCard}
						>
							{cardTotalHours}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	_renderCategories = () => {
		return (
			<View>
				<View />
			</View>
		);
	};

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
		return (
			<View style={styles.mainContainer}>
				<View style={styles.wrapperSectionTitle}>
					<Text
						numberOfLines={2}
						ellipsizeMode={'tail'}
						style={styles.sectionTitleStyle}
					>
						{'Cursos'}
					</Text>
				</View>
				<ScrollView style={styles.container}>
					<View style={styles.wrapperContent}>
						<View style={styles.wrapperSwipeableCardsList}>
							{this._renderSwipeableCardsList()}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default HomeScreen;
