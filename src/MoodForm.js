import React, { Component } from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import style from './MoodFormStyle';
import emojiMoodArr from './emojiMoodArr';

class MoodForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMood: null,
			moodInput: '',
			flashError: false,
		};
	}

	setMood = (newMood) => {
		this.setState({ activeMood: newMood });
	};

	handleSubmit = () => {
		if (this.state.activeMood) {
			const newMoment = moment();
			const newMoodObj = {
				slug: `${newMoment.format('MM DD YYYY')}`,
				moodNum: this.state.activeMood,
				moment: newMoment,
				other: this.state.moodInput,
			};

			this.props.addNewMood(newMoodObj);

			this.setState({ activeMood: null, moodInput: '' });
		} else {
			this.setState({ flashError: true });
			setTimeout(() => this.setState({ flashError: false }), 1000);
		}
	};

	handleInputChange = (e) => {
		this.setState({ moodInput: e.target.value, flashError: false });
	};

	render() {
		const { classes, removeMoodForm } = this.props;
		const { flashError } = this.state;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={removeMoodForm} />
				<div
					className={`${classes.moodForm} ${
						this.state.showOpacity ? classes.show : classes.hide
					}`}
				>
					<h1>How are you feeling right now?</h1>
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
