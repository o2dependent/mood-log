import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import CalendarContainer from './CalendarContainer';
import MoodForm from './MoodForm';
import ShowDay from './ShowDay';
import TitleCard from './TitleCard';
import style from '../Styles/AppStyles';
import FilterModal from './FilterModal';
import FilterButton from './FilterButton';
import Modal from './Modal';
import { AnimatePresence, motion } from 'framer-motion';

// TODO add calendar scroll or swipe functionality | arrows on side for desktop?

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moodsArr: JSON.parse(window.localStorage.getItem('moods') || '[]'),
			showMoodForm: false,
			showFilterModal: false,
			curMonth: moment().format('MMMM'),
			curYear: moment().format('YYYY'),
			startTime: -1,
			endTime: 24,
			days: [],
			averageType: 'moods',
		};
		this.weekdayShort = moment.weekdaysShort();
	}

	componentDidMount = () => {
		this.setState({ days: this.getDaysInMonth() });
	};

	// Add new mood to state and local storage
	addNewMood = async (newMoodObj) => {
		await this.setState((st) => ({
			moodsArr: [...st.moodsArr, newMoodObj],
			showMoodForm: false,
		}));
		window.localStorage.setItem(
			'moods',
			JSON.stringify(this.state.moodsArr)
		);
	};

	// Set state for filters
	setFilter = (filterObj) => {
		Object.keys(filterObj).forEach((key) =>
			this.setState({ [key]: filterObj[key] })
		);
		this.setState({ days: this.getDaysInMonth });
	};

	// Open mood form modal
	showMoodForm = () => {
		this.setState({ showMoodForm: true });
	};

	// Close mood form modal
	removeMoodForm = () => {
		this.setState({ showMoodForm: false });
	};

	// Remove mood from moodsArr
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

	// Toggle filter modal
	toggleFilterModal = (open) => (e) => {
		if (
			e &&
			e.type === 'keydown' &&
			(e.key === 'Tab' || e.key === 'Shift')
		) {
			return;
		}
		this.setState({ showFilterModal: open });
	};

	// Return array of days in current month and any logged moods --- day = { day: DAY_NUM,event: [...MOOD_EVENTS] }
	getDaysInMonth = () => {
		const { moodsArr, curMonth, curYear, startTime, endTime } = this.state;
		const dateObject = moment(`${curMonth} ${curYear}`);
		const lastDay = moment(dateObject).endOf('month').format('D');

		const daysArr = new Array(Number(lastDay))
			.fill()
			.map((v, i) => ({ day: i + 1, event: [] }));

		moodsArr.forEach((m) => {
			const newMoment = moment(m.moment);
			const dayIdx = Number(newMoment.format('D')) - 1;

			const month = newMoment.format('MMMM');
			const year = newMoment.format('YYYY');
			const dateValid = month === curMonth && year === curYear;

			const time = Number(newMoment.format('H'));
			const timeValid = time >= startTime && time <= endTime;

			if (dateValid && timeValid) {
				daysArr[dayIdx].event.push(m);
			}
		});

		return daysArr;
	};

	render() {
		const { classes } = this.props;
		const {
			curYear,
			curMonth,
			startTime,
			endTime,
			showMoodForm,
			showFilterModal,
			/* TODO add anxiety | mood average toggler */
			averageType,
		} = this.state;
		const days = this.getDaysInMonth();
		return (
			<div className={classes.app}>
				<Modal isToggled={showMoodForm} close={this.removeMoodForm}>
					{/* Mood Modal */}
					<MoodForm addNewMood={this.addNewMood} />
				</Modal>
				{/* TODO implement additional filters */}
				{/* Filter modal */}
				<Modal
					isToggled={showFilterModal}
					close={this.toggleFilterModal(false)}
				>
					<FilterModal
						curMonth={curMonth}
						curYear={curYear}
						startTime={startTime}
						endTime={endTime}
						setFilter={this.setFilter}
						close={this.toggleFilterModal(false)}
					/>
				</Modal>
				<FilterButton open={this.toggleFilterModal(true)} />
				<TitleCard
					curMonth={curMonth}
					curYear={curYear}
					showMoodForm={this.showMoodForm}
				/>
				<div className={classes.page}>
					<Switch>
						{/* HOME | REDIRECT TO CALENDAR */}
						<Route exact path='/'>
							<Redirect to='/calendar' />
						</Route>
						{/* CALENDAR */}
						<Route exact path='/calendar'>
							<motion.div>
								<CalendarContainer
									startTime={startTime}
									endTime={endTime}
									curYear={curYear}
									curMonth={curMonth}
									days={days}
								/>
							</motion.div>
						</Route>
						{/* SHOW DAY */}
						<Route path='/calendar/day/:date'>
							<ShowDay
								days={days}
								addNewMood={this.addNewMood}
								removeMood={this.removeMood}
							/>
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(App);
