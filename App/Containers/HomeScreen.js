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

	_renderSwipeableCard = item => {
		const cardId = item.id;
		const cardThumbnail = item.thumbnail;
		const cardTitle = item.title;
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

	_renderSwipeableCardsList = () => {
		const data = [
			{
				id: '1',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 1',
				totalHours: 10
			},
			{
				id: '2',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 2',
				totalHours: 1
			},
			{
				id: '3',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 3',
				totalHours: 30
			},
			{
				id: '4',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 4',
				totalHours: 40
			},
			{
				id: '5',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 5',
				totalHours: 50
			},
			{
				id: '6',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 6',
				totalHours: 60
			},
			{
				id: '7',
				thumbnail: Images.courses,
				title: 'Engenharia Civil 7',
				totalHours: 70
			}
		];
		return (
			<View>
				<FlatList
					data={data}
					showsHorizontalScrollIndicator={false}
					horizontal
					renderItem={({ item }) => this._renderSwipeableCard(item)}
					keyExtractor={this._keyExtractor}
				/>
			</View>
		);
	};

	render() {
		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					<View style={styles.section}>{this._renderSwipeableCardsList()}</View>
				</ScrollView>
			</View>
		);
	}
}

export default HomeScreen;
