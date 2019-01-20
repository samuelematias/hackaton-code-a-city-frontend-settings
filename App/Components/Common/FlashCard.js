import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Modal,
	Text,
	Image,
	ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { Images } from '../../Themes';

//styles
import styles from './Styles/FlashCardStyles';

class FlashCard extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	//Modal
	renderQuestions() {
		const { open } = this.props;

		return (
			<View style={styles.questionsWrapper}>
				<Modal animationType="slide" transparent={false} visible={open}>
					<View style={styles.questionsContainer}>
						<View style={styles.questionsWrapperHeader}>
							<View style={styles.questionsHeader}>
								<TouchableOpacity style={styles.buttonLeft} onPress={() => {}}>
									<Image
										source={Images.iconClose}
										style={styles.iconNavBar}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>
								<Text style={styles.questionsHeaderText}>{'Flashcards'}</Text>
								<View style={styles.buttonRight} />
							</View>
						</View>

						<View style={styles.questionsBody}>
							<View style={styles.questionsWrapperProgress}>
								<Text style={styles.questionsProgressText}>
									Progress{' '}
									<Text style={styles.questionsProgressCount}>
										{1 + 1}/{1}
									</Text>
								</Text>
								<View style={styles.questionsProgress}>
									<View
										style={[
											styles.questionsProgressBar,
											{
												/*
												flex:
													questionIndex === 0
														? 0
														: questionIndex / currentSession.questions.length
                                            */
											}
										]}
									/>
								</View>
							</View>
							<View style={styles.questionsCard}>
								<Image
									source={Images.cardBack}
									style={styles.flashCard}
									resizeMode={'contain'}
								/>
								<View style={styles.floatQuestionContent}>
									<ScrollView
										showsVerticalScrollIndicator={false}
										style={styles.scrollContainer}
									>
										{/*currentSession.questions[questionIndex].flashcard.back
											.audio
											? this.renderPlayAudio(
													currentSession.questions[questionIndex].flashcard.back
											  )
                                            : null*/}
										{/*currentSession.questions[questionIndex].flashcard.back
											.image ? (
											<View style={styles.floatQuestionContentImage}>
												<Image
													source={{
														uri:
															currentSession.questions[questionIndex].flashcard
																.back.image
													}}
													style={styles.flashcardFrontImage}
													resizeMode={'cover'}
												/>
											</View>
                                                ) : null*/}
										{/*currentSession.questions[questionIndex].flashcard.back.text
											? this.renderLinkPreview(
													currentSession.questions[questionIndex].flashcard.back
														.text
											  )
                                            : null*/}
									</ScrollView>
								</View>
							</View>
						</View>

						<View style={styles.questionsFooter}>
							<View style={styles.tapToFlipWrapper}>
								<TouchableOpacity onPress={() => {}}>
									<Image
										source={Images.iconArrowLeftWhite}
										style={styles.tapToFlipImage}
									/>
								</TouchableOpacity>
							</View>
							<View style={styles.footerWrapper}>
								<TouchableOpacity
									disabled={this.state.flipButton ? true : false}
									style={
										this.state.flipButton
											? styles.buttonDisabledCancel
											: styles.buttonCancel
									}
									onPress={() => {}}
								>
									<Image
										source={Images.iconWrong}
										style={styles.iconFlashcardWrong}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>

								<TouchableOpacity
									disabled={this.state.flipButton ? true : false}
									style={
										this.state.flipButton
											? styles.buttonDisabledSuccess
											: styles.buttonSuccess
									}
									onPress={() => {}}
								>
									<Image
										source={Images.iconCorrect}
										style={styles.iconFlashcardCorrect}
										resizeMode={'contain'}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}

	/**
	 * render the modal
	 * @author samuelmataraso
	 * @method renderSeparator
	 * @param none
	 * @return {func} render
	 */
	_renderModal = () => {
		const {
			open,
			onPressOutside,
			modalContent,
			overlayStyle,
			showButtonOnOverlay,
			showButtonOnModal,
			buttonOnOverlayStyle,
			buttonOnModalStyle,
			roundCorner,
			contentModalStyle,
			contentOverlayStyle
		} = this.props;
		const {} = this.state;

		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={open}
				onRequestClose={() => {}}
			>
				<View style={styles.containerBottomModal}>
					<TouchableOpacity
						style={[styles.bottomOverlay, overlayStyle]}
						onPress={() => onPressOutside()}
					>
						<View style={[styles.wrapperOverlay, contentOverlayStyle]}>
							{showButtonOnOverlay && (
								<View style={[styles.buttonOnOverlay, buttonOnOverlayStyle]} />
							)}
						</View>
					</TouchableOpacity>
					<View
						style={[
							styles.wrapperContent,
							contentModalStyle,
							{
								borderTopLeftRadius: roundCorner,
								borderTopRightRadius: roundCorner
							}
						]}
					>
						{showButtonOnModal && (
							<TouchableOpacity
								style={styles.wrapperButtonOnModal}
								onPress={() => onPressOutside()}
								activeOpacity={1}
							>
								<View style={[styles.buttonOnModal, buttonOnModalStyle]} />
							</TouchableOpacity>
						)}
						{modalContent()}
					</View>
				</View>
			</Modal>
		);
	};

	render() {
		return this.renderQuestions();
	}
}

FlashCard.defaultProps = {
	/**
	 *(PropsTypes)
	 *imageProps: Images.iconBlankStateTwo,
	 *boolProps: false,
	 *nullProps: null,
	 *stringProps: '',
	 *funcProps: () => {},
	 *numProps: 2,
	 */
	open: false,
	onPressOutside: () => {},
	onValidSubmit: () => {},
	onPressCancel: () => {},
	modalContent: () => {},
	overlayStyle: styles.bottomOverlay,
	showButtonOnOverlay: false,
	showButtonOnModal: false,
	buttonOnOverlayStyle: styles.buttonOnOverlay,
	buttonOnModalStyle: styles.buttonOnModal,
	roundCorner: 6,
	contentModalStyle: styles.wrapperContent,
	contentOverlayStyle: styles.wrapperOverlay
};

FlashCard.propTypes = {
	/**
   *(used for some props with any type)
   *  anyType: PropTypes.any
   *(used to boolean props)
   *  boolType: PropTypes.bool
   *(used to stirng props)
   *  stringType: PropTypes.string
   *(user to number props)
   *  numberProps: PropTypes.number
   *(used to func props (onPress, overlay, etc.))
   *  funcType: PropTypes.func
   *(used to styles props)
   *  objectType: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
      PropTypes.array
    ])
   *(used to images(url/images on project))
   *  imageType: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
   */
	open: PropTypes.bool,
	onPressOutside: PropTypes.func,
	onValidSubmit: PropTypes.func,
	onPressCancel: PropTypes.func,
	overlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	showButtonOnOverlay: PropTypes.bool,
	showButtonOnModal: PropTypes.bool,
	buttonOnOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	buttonOnModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	roundCorner: PropTypes.number,
	contentModalStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	]),
	contentOverlayStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
		PropTypes.array
	])
};

export default FlashCard;
