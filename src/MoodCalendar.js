import React, { Component } from 'react';
import MoodForm from './MoodForm';
import { withStyles } from '@material-ui/styles';
import colors from './colors';
import { Button } from '@material-ui/core';

const styles = {
	MoodCalendar: {
		display: 'flex',
		flexDirection: 'rows',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		height: 'fit-content',
		background: colors.bgPurp,
	},
	dateCard: {
		'& img': {
			width: '3vw',
		},
	},
	showFormCard: {
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		height: 'fit-content',
		width: '50%',
		margin: '5vh auto',
		padding: '0 0.5em',
		paddingTop: '2rem',
		paddingBottom: '2%',
		background: colors.bgAccent,
		borderRadius: '10px',
		color: colors.white,
		boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.35)',
		'& h4': {
			fontSize: '2.2vw',
			fontWeight: '300',
			margin: '0',
		},
		'& h2': {
			fontSize: '2.6vw',
			fontWeight: '300',
			margin: '0 5%',
			marginTop: '3vh',
			marginBottom: '5vh',
		},
		'@media (max-width: 350px)': {
			width: '90%',
		},
	},
	showFormButton: {
		'&.MuiButton-root:hover': {
			transition: 'all 400ms',
			background: colors.lightPurp,
			transform: 'translate(50%, 45%)',
			boxShadow: '0px 7px 7px rgba(0, 0, 0, 0.45)',
		},
		'&.MuiButton-root': {
			fontFamily: 'Raleway, sans-serif',
		},
		transition: 'all 200ms',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
		color: colors.white,
		background: colors.lightPurp,
		fontSize: '2.5vw',
		fontWeight: '400',
		outline: 'none',
		border: 'none',
		transform: 'translate(50%, 50%)',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '50%',
		height: 'fit-content',
		borderRadius: '10px',
		textTransform: 'none',
	},
};

class MoodCalendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moodsArr: JSON.parse(window.localStorage.getItem('moods') || '[]'),
			showMoodForm: false,
		};
	}

	addNewMood = async (newMoodObj) => {
		await this.setState((st) => ({
			moodsArr: [...st.moodsArr, newMoodObj],
			showMoodForm: false,
		}));

		const moods = this.state.moodsArr;

		window.localStorage.setItem('moods', JSON.stringify(moods));
	};

	showMoodForm = () => {
		this.setState({ showMoodForm: true });
	};

	removeMoodForm = () => {
		this.setState({ showMoodForm: false });
	};

	removeMood = async (idx) => {
		await this.setState((st) => ({
			moodsArr: [
				...st.moodsArr.slice(0, idx),
				...st.moodsArr.slice(idx + 1, st.moodsArr.length),
			],
		}));

		window.localStorage.setItem(
			'moods',
			JSON.stringify(this.state.moodsArr)
		);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.MoodCalendar}>
				{
					/* Mood Modal */
					this.state.showMoodForm && (
						<MoodForm
							addNewMood={this.addNewMood}
							removeMoodForm={this.removeMoodForm}
						/>
					)
				}
				{this.state.moodsArr.map((mood, idx) => (
					<div className={classes.dateCard}>
						<img
							className={classes.emoji}
							src={`./emojis/${mood.mood}.svg`}
							alt={mood.mood}
						/>
						<p>{mood.other}</p>
						<button onClick={() => this.removeMood(idx)}>
							Delete
						</button>
					</div>
				))}
				<div className={classes.showFormCard}>
					<h4>Welcome Back</h4>
					<h2>
						When you are feeling extra up, down, or just strange,
						open up and jot your feelings down
					</h2>
					<Button
						className={classes.showFormButton}
						onClick={this.showMoodForm}
					>
						Log a Mood
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MoodCalendar);
