import React, { Component } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import style from '../Styles/MoodFormStyle';
import emojiMoodArr from '../Helpers/emojiMoodArr';

class MoodForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMood: NaN,
			date: this.props.date,
			time: '17:35',
			moodInput: '',
			flashError: false,
		};
	}

	setMood = (newMood) => {
		this.setState({ activeMood: newMood });
	};

	handleSubmit = () => {
		if (!isNaN(this.state.activeMood)) {
			const { date, time, moodInput, activeMood } = this.state;
			const newMoment = moment(`${date} ${time}`, 'MM DD YYYY HH:mm');
			console.log(newMoment);
			console.log(moment());
			const newMoodObj = {
				slug: `${newMoment.format('MM DD YYYY')}`,
				moodNum: activeMood,
				moment: newMoment,
				other: moodInput,
			};

			this.props.addDayMood(newMoodObj);

			this.setState({ activeMood: null, moodInput: '' });
		} else {
			this.setState({ flashError: true });
			setTimeout(() => this.setState({ flashError: false }), 1000);
		}
	};

	handleInputChange = (e) => {
		this.setState({ [e.target.name]: e.target.value, flashError: false });
	};

	render() {
		const { classes, removeDayForm } = this.props;
		const { flashError } = this.state;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={removeDayForm} />
				<div
					className={`${classes.moodForm} ${
						this.state.showOpacity ? classes.show : classes.hide
					}`}
				>
					<h1>What would you like to add?</h1>
					<div
						className={`${classes.emojiContainer} ${
							flashError ? classes.flashError : ''
						}`}
					>
						{emojiMoodArr.map((emoji, idx) => (
							<div
								key={`mood ${emoji}`}
								onClick={() => this.setMood(idx)}
							>
								<img
									className={`${classes.emoji} ${
										this.state.activeMood === idx &&
										classes.active
									}`}
									src={`/emojis/${emoji}.svg`}
									alt={emoji}
								/>
							</div>
						))}
					</div>
					<MoodTextField
						name='time'
						label='Time'
						type='time'
						defaultValue='07:30'
						value={this.state.time}
						onChange={this.handleInputChange}
					/>
					<MoodTextField
						name='moodInput'
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
