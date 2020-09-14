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
			date: this.props.date,
			time: '17:35',
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
		const { date, time, moodInput, activeMood, activeAnxiety } = this.state;
		const newMoment = moment(`${date} ${time}`, 'MM DD YYYY HH:mm');
		const newMoodObj = {
			slug: `${newMoment.format('MM DD YYYY')}`,
			moodNum: activeMood,
			anxietyNum: activeAnxiety,
			moment: newMoment,
			other: moodInput,
		};

		this.props.addDayMood(newMoodObj);

		this.setState({ activeMood: null, moodInput: '' });
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { classes } = this.props;
		const { activeAnxiety, activeMood, time, moodInput } = this.state;
		return (
			<div className={classes.moodForm}>
				<h1>What would you like to add?</h1>
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
							color: this.anxietyScale(activeAnxiety / 100).hex(),
						}}
						value={activeAnxiety}
						step={1}
						min={0}
						max={100}
						onChange={this.set('activeAnxiety')}
						valueLabelDisplay='auto'
						getAriaValueText={(value) => emojiMoodArr[value]}
						valueLabelFormat={(value) => `${value}%`}
						aria-labelledby='mood-slider'
					/>
				</div>
				<MoodTextField
					name='time'
					label='Time'
					type='time'
					defaultValue='07:30'
					value={time}
					onChange={this.handleInputChange}
				/>
				<MoodTextField
					name='moodInput'
					label='Other thoughts'
					value={moodInput}
					onChange={this.handleInputChange}
				/>
				<Button
					className={classes.submitBtn}
					onClick={this.handleSubmit}
				>
					Save
				</Button>
			</div>
		);
	}
}

export default withStyles(style)(MoodForm);
