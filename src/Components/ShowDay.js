import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import emojiMoodArr from '../Helpers/emojiMoodArr';
import moment from 'moment';
import colors from '../Styles/colors';
import { Button } from '@material-ui/core';
import DayForm from './DayForm';
import useStyles from '../Styles/ShowDayStyles';
import chroma from 'chroma-js';
import Modal from './Modal';
import { motion, AnimatePresence } from 'framer-motion';
import DeleteIcon from '@material-ui/icons/Delete';

function ShowDay(props) {
	// pre function variables
	const { date } = useParams();
	const [formOpen, setFormState] = useState(false);
	const [canDelete, setCanDelete] = useState(false);
	const { days, removeMood } = props;
	// functions for variables
	const findDays = () => {
		const todayIdx = Number(moment(date).format('D')) - 1;
		return [...days[todayIdx].event].sort((a, b) => {
			return (
				Number(moment(a.moment).format('HH.mm')) -
				Number(moment(b.moment).format('HH.mm'))
			);
		});
	};
	// function dependent variables
	const dayArr = findDays();
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
			<Modal isToggled={formOpen} close={removeDayForm}>
				<DayForm
					date={date}
					addDayMood={addDayMood}
					removeDayForm={removeDayForm}
				/>
			</Modal>
			<div className={classes.dayItemContainer}>
				<h4>Mood of the day</h4>
				{/* TODO add anxiety toggler */}
				<AnimatePresence key={`dayAnimate`}>
					{hasMoods ? (
						dayArr.map((d, i) => (
							<motion.div
								key={`${d.id} dayItem`}
								className={classes.dayItem}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ height: 0 }}
								transition={{
									opacity: {
										duration: 1,
										delay: i * 0.1,
									},
								}}
							>
								<p className={classes.dayTime}>
									{moment(d.moment).format('hh:mm a')}
								</p>
								<div
									className={`${classes.dayNotes} ${
										d.other.length > 0 ? '' : 'noNote'
									}`}
								>
									<p>
										{d.other.length > 0
											? d.other
											: 'No note'}
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
									<AnimatePresence
										key={`${d.id} trashAnimate`}
									>
										{canDelete && (
											<motion.div
												key={`${d.id} trash`}
												onClick={() =>
													removeMood(d.idx)
												}
												className={classes.deleteMood}
												initial={{
													rotate: 90,
													opacity: 0,
													scale: 1.2,
													x: '100%',
												}}
												animate={{
													rotate: 0,
													opacity: 1,
													scale: 1,
													x: 0,
												}}
												exit={{
													opacity: 0,
													scale: 1.2,
													x: '100%',
												}}
												transition={{
													x: {
														duration: 0.5,
														delay: 0.04 * i,
													},
													opacity: {
														duration: 0.2,
														delay: 0.04 * i,
													},
													rotate: {
														type: 'spring',
														damping: 8,
													},
													scale: {
														duration: 0.2,
														delay: 0.02 * i,
													},
												}}
											>
												<DeleteIcon />
											</motion.div>
										)}
									</AnimatePresence>
									<img
										src={
											process.env.PUBLIC_URL +
											`/emojis/${
												emojiMoodArr[d.moodNum]
											}.svg`
										}
										alt={emojiMoodArr[d.moodNum]}
									/>
								</div>
							</motion.div>
						))
					) : (
						<p>No moods to show</p>
					)}
				</AnimatePresence>
				<div className={classes.buttonContainer}>
					{hasMoods ? (
						<Button
							style={{
								background: chroma
									.scale([
										colors.danger,
										colors.card.itemPrimary,
									])
									.colors(10)[canDelete ? 3 : 6],
							}}
							className={`${classes.cardButton} ${classes.deleteButton}`}
							onClick={() => setCanDelete(!canDelete)}
						>
							Delete
						</Button>
					) : (
						<div />
					)}
					<Button
						className={classes.cardButton}
						onClick={() => openDayForm()}
					>
						Add a mood
					</Button>
				</div>
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
					<></>
				)}
			</div>
		</div>
	);
}

export default ShowDay;
