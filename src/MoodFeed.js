import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import colors from './colors';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
	MoodFeed: {
		display: 'flex',
		flexDirection: 'column',
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
	feedCard: {
		'&.moodFormCard': {
			background: 'linear-gradient(180deg, #3D3166 46.09%, #722977 350%)',
		},
		'&.moodLogsCard': {
			background:
				'linear-gradient(180deg, #3D3166 50.16%, #3D3166 69.71%, #8487BA 350%)',
		},
		display: 'grid',
		boxSizing: 'border-box',
		justifyContent: 'center',
		position: 'relative',
		height: 'fit-content',
		width: '50%',
		margin: '3vh auto',
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
		'@media (max-width: 800px)': {
			width: '98%',
			'& h2': {
				fontSize: '6vw',
			},
			'& h4': {
				fontSize: '5vw',
			},
		},
	},
	cardButton: {
		'&.MuiButton-root:hover': {
			transition: 'all 400ms',
			background: colors.pink,
			transform: 'translate(50%, 45%)',
			boxShadow: '0px 7px 7px rgba(0, 0, 0, 0.45)',
		},
		'&.MuiButton-root': {
			fontFamily: 'Raleway, sans-serif',
		},
		'&.moodLogsButton': {
			background: colors.lightPurp,
			'&.MuiButton-root:hover': {
				background: colors.lightPurp,
			},
		},
		transition: 'all 200ms',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
		color: colors.white,
		background: colors.pink,
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
		'@media (max-width: 800px)': {
			fontSize: '5vw',
		},
	},
};

class MoodFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	addNewMood = async (newMoodObj) => {
		this.props.addNewMood(newMoodObj);
	};

	showMoodForm = () => {
		this.props.showMoodForm();
	};

	removeMoodForm = () => {
		this.props.removeMoodForm();
	};

	removeMood = (idx) => {
		this.props.removeMood(idx);
	};

	render() {
		const { classes, moodsArr, showMoodForm, removeMood } = this.props;
		return (
			<div className={classes.MoodFeed}>
				{
					/* Moods Display */
					// moodsArr.map((mood, idx) => (
					// 	<div className={classes.dateCard} key={`${mood}${idx}`}>
					// 		<img
					// 			className={classes.emoji}
					// 			src={`./emojis/${mood.mood}.svg`}
					// 			alt={mood.mood}
					// 		/>
					// 		<p>{mood.other}</p>
					// 		<button onClick={() => removeMood(idx)}>
					// 			Delete
					// 		</button>
					// 	</div>
					// ))
				}
				<div className={`${classes.feedCard} moodFormCard`}>
					<h4>Welcome Back</h4>
					<h2>
						When you are feeling extra up, down, or just strange,
						open up and jot your feelings
					</h2>
					<Button
						className={`${classes.cardButton} moodFormButton`}
						onClick={showMoodForm}
					>
						Log a Mood
					</Button>
				</div>
				<div className={`${classes.feedCard} moodLogsCard`}>
					<h4>View your moods</h4>
					<h2>Check out logged moods</h2>
					<Link to='/calendar'>
						<Button
							className={`${classes.cardButton} moodLogsButton`}
						>
							Check Moods
						</Button>
					</Link>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(MoodFeed);
