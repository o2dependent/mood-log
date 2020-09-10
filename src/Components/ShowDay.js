import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import emojiMoodArr from '../Helpers/emojiMoodArr';
import moment from 'moment';
import colors from '../Styles/colors';
import { Button } from '@material-ui/core';
import DayForm from './DayForm';
import useStyles from '../Styles/ShowDayStyles';

function ShowDay(props) {
	// pre function variables
	const { date } = useParams();
	const [formOpen, setFormState] = useState(false);
	const { moodsArr } = props;
	const dayIdx = [];
	// functions for variables
	const findDays = () => {
		return moodsArr
			.filter((d, i) => (d.slug === date ? dayIdx.push(i) : null))
			.sort(
				(a, b) =>
					Number(moment(a.moment).format('HH.mm')) -
					Number(moment(b.moment).format('HH.mm'))
			);
	};
	// function dependent variables
	const dayArr = findDays();
	console.log(dayArr);
	const hasMoods = dayArr.length > 0;
	const avgMoodNum = hasMoods
		? Math.floor(
				dayArr.map((m) => m.moodNum).reduce((a, b) => a + b) /
					dayArr.length
		  )
		: null;
	const classes = useStyles(dayArr);
	const removeDayForm = () => {
		setFormState(false);
	};
	const openDayForm = () => {
		setFormState(true);
	};
	const addDayMood = (newMoodObj) => {
		removeDayForm();
		props.addNewMood(newMoodObj);
	};

	return (
		<div className={classes.showDay}>
			{formOpen && (
				<DayForm
					date={date}
					addDayMood={addDayMood}
					removeDayForm={removeDayForm}
				/>
			)}
			<div className={classes.dayItemContainer}>
				<h4>Mood of the day</h4>
				{hasMoods ? (
					dayArr.map((d, i) => (
						<div className={classes.dayItem}>
							<p className={classes.dayTime}>
								{moment(d.moment).format('hh:mm a')}
							</p>
							<div
								className={`${classes.dayNotes} ${
									d.other.length > 0 ? '' : 'noNote'
								}`}
							>
								<p>
									{d.other.length > 0 ? d.other : 'No note'}
								</p>
							</div>
							<div
								className={classes.dayEmoji}
								style={{
									background: `${
										colors[`dateMood${d.moodNum}`]
									}90`,
								}}
							>
								<img
									src={
										process.env.PUBLIC_URL +
										`/emojis/${emojiMoodArr[d.moodNum]}.svg`
									}
									alt={emojiMoodArr[d.moodNum]}
								/>
							</div>
						</div>
					))
				) : (
					<p>No moods to show</p>
				)}
				<Button
					className={classes.cardButton}
					onClick={() => openDayForm()}
				>
					Add a mood
				</Button>
			</div>
			<div>
				{hasMoods ? (
					<div className={classes.dayAvg}>
						<h4>Daily Average</h4>
						<p>
							Your average mood for the day seems to be a solid{' '}
							{emojiMoodArr[avgMoodNum]}
						</p>
						<div
							className={classes.dayAvgEmoji}
							style={{
								background: `${
									colors[`dateMood${avgMoodNum}`]
								}90`,
							}}
						>
							<img
								src={`/emojis/${emojiMoodArr[avgMoodNum]}.svg`}
								alt={emojiMoodArr[avgMoodNum]}
							/>
						</div>
					</div>
				) : (
					<p>No moods to average</p>
				)}
			</div>
		</div>
	);
}

export default ShowDay;
