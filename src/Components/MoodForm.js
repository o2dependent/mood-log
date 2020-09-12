import React, { Component } from 'react';
import moment from 'moment';
import { Button, Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import style from '../Styles/MoodFormStyle';
import emojiMoodArr from '../Helpers/emojiMoodArr';
import colors from '../Styles/colors';
import chroma from 'chroma-js';

class MoodForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMood: 2,
			activeAnxiety: 0,
			moodInput: '',
		};
		this.anxietyScale = chroma.scale([
			colors.anxietyScale0,
			colors.anxietyScale1,
		]);
	}

	set = (name) => (e, newVal) => {
		this.setState({ [name]: newVal });
	};

	handleSubmit = () => {
		const { activeMood, activeAnxiety, moodInput } = this.state;
		const newMoment = moment();
		const newMoodObj = {
			slug: `${newMoment.format('MM DD YYYY')}`,
			moodNum: activeMood,
			anxietyNum: activeAnxiety,
			moment: newMoment,
			other: moodInput,
		};

		this.props.addNewMood(newMoodObj);

		this.setState({ activeMood: null, moodInput: '' });
	};

	handleInputChange = (e) => {
		this.setState({ moodInput: e.target.value });
	};

	render() {
		const { classes, removeMoodForm } = this.props;
		const { activeMood, activeAnxiety } = this.state;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={removeMoodForm} />
				<div className={classes.moodForm}>
					<h1>How are you feeling right now?</h1>
					<div>
						<Typography
							className={classes.sliderLabel}
							id='mood-slider'
						>
							Mood
						</Typography>
						<Slider
							className={classes.moodSlider}
							style={{
								color: colors[`dateMood${activeMood}`],
							}}
							value={activeMood}
							step={1}
							min={0}
							max={4}
							onChange={this.set('activeMood')}
							valueLabelDisplay='auto'
							getAriaValueText={(value) => emojiMoodArr[value]}
							valueLabelFormat={(value) => (
								<img
									className={classes.emoji}
									src={`/emojis/${emojiMoodArr[value]}.svg`}
									alt={emojiMoodArr[value]}
								/>
							)}
							aria-labelledby='mood-slider'
						/>
					</div>
					<div>
						<Typography
							className={classes.sliderLabel}
							id='anxiety-slider'
						>
							Anxiety
						</Typography>
						<Slider
							className={classes.anxietySlider}
							style={{
								color: this.anxietyScale(
									activeAnxiety / 100
								).hex(),
							}}
							value={activeAnxiety}
							step={1}
							min={0}
							max={100}
							onChange={this.set('activeAnxiety')}
							valueLabelDisplay='auto'
							getAriaValueText={(value) => `${value}%`}
							valueLabelFormat={(value) => `${value}%`}
							aria-labelledby='mood-slider'
						/>
					</div>
					<MoodTextField
						label='Other thoughts'
						value={this.state.moodInput}
						onChange={this.handleInputChange}
					/>
					<Button
						className={classes.submitBtn}
						onClick={this.handleSubmit}
					>
						Save
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(MoodForm);
