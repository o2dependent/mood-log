import React, { Component } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import style from './MoodFormStyle';

class MoodForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMood: Number,
			moodInput: '',
		};
		this.emojiMoodArr = ['sad-tear', 'frown', 'meh', 'smile', 'grin'];
	}

	setMood = (newMood) => {
		this.setState({ activeMood: newMood });
	};

	handleSubmit = () => {
		const newMoment = moment();
		const newMoodObj = {
			slug: `${newMoment.format('MM DD YYYY')}`,
			mood: this.emojiMoodArr[this.state.activeMood],
			moodNum: this.state.activeMood,
			moment: newMoment,
			other: this.state.moodInput,
		};

		this.props.addNewMood(newMoodObj);

		this.setState({ activeMood: Number, moodInput: '' });
	};

	handleInputChange = (e) => {
		this.setState({ moodInput: e.target.value });
	};

	render() {
		const { classes, removeMoodForm } = this.props;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={removeMoodForm} />
				<div
					className={`${classes.moodForm} ${
						this.state.showOpacity ? classes.show : classes.hide
					}`}
				>
					<h1>How are you feeling right now?</h1>
					<div className={classes.emojiContainer}>
						{this.emojiMoodArr.map((emoji, idx) => (
							<div
								key={`mood ${emoji}`}
								onClick={() => this.setMood(idx)}
							>
								<img
									className={`${classes.emoji} ${
										this.state.activeMood === idx &&
										classes.active
									}`}
									src={`./emojis/${emoji}.svg`}
									alt={emoji}
								/>
							</div>
						))}
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
