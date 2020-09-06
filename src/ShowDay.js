import React from 'react';
import { useParams } from 'react-router-dom';
import emojiMoodArr from './emojiMoodArr';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	dayItemContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: (dayArr) => `repeat(${dayArr.length}, 1fr)`,
	},
	dayItem: {
		display: 'grid',
		gridTemplateColumns: '1fr 6fr 1fr',
		gridTemplateRows: '1fr',
	},
});

function ShowDay(props) {
	// pre function variables
	const { date } = useParams();
	const { moodsArr, removeMood } = props;
	const dayIdx = [];
	// functions for variables
	const findDays = () => {
		return moodsArr.filter((d, i) =>
			d.slug === date ? dayIdx.push(i) : null
		);
	};
	// function dependent variables
	const dayArr = findDays();
	const avgMoodNum = Math.floor(
		dayArr.map((m) => m.moodNum).reduce((a, b) => a + b) / dayArr.length
	);
	const classes = useStyles(dayArr);

	return (
		<div>
			<p>{date}</p>
			<div className={classes.dayItemContainer}>
				{dayArr &&
					dayArr.map((d, i) => (
						<div className={classes.dayItem}>
							<img
								className={classes.dayItemImg}
								src={`/emojis/${emojiMoodArr[d.moodNum]}.svg`}
								alt={emojiMoodArr[d.moodNum]}
							/>
							<p>{d.other}</p>
							<button onClick={() => removeMood(dayIdx[i])}>
								Delete
							</button>
						</div>
					))}
			</div>
			<div>
				<h4>Average for the day</h4>
				<img
					src={`/emojis/${emojiMoodArr[avgMoodNum]}.svg`}
					alt={emojiMoodArr[avgMoodNum]}
				/>
			</div>
		</div>
	);
}

export default ShowDay;
