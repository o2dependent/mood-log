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

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moodsArr: JSON.parse(window.localStorage.getItem('moods') || '[]'),
			showMoodForm: false,
			showFilterModal: false,
			curMonth: moment().format('MMMM'),
			curYear: moment().format('YYYY'),
			startTime: 0,
			endTime: 23,
		};
		this.weekdayShort = moment.weekdaysShort();
	}

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

	// Format month for collapsed and open states
	formatMonth = () => {
		const month = this.state.curMonth;
		const first = month.slice(0, 3);
		const last = <span>{month.slice(3)}</span>;
		const formatted = {
			first: first,
			last: last,
		};
		return formatted;
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

	render() {
		const { classes } = this.props;
		const {
			moodsArr,
			curYear,
			curMonth,
			startTime,
			endTime,
			showMoodForm,
			showFilterModal,
		} = this.state;
		const curMonthFormatted = this.formatMonth();
		return (
			<div className={classes.app}>
				{
					/* Mood Modal */
					showMoodForm && (
						<MoodForm
							addNewMood={this.addNewMood}
							removeMoodForm={this.removeMoodForm}
						/>
					)
				}
				{/* TODO implement filters */}
				{
					/* Filter modal */ showFilterModal && (
						<FilterModal close={this.toggleFilterModal(false)} />
					)
				}

				<TitleCard
					curMonthFormatted={curMonthFormatted}
					curYear={curYear}
					showMoodForm={this.showMoodForm}
				/>
				<div className={classes.page}>
					<Switch>
						<Route exact path='/'>
							<Redirect to='/calendar' />
						</Route>
						<Route exact path='/calendar'>
							<CalendarContainer
								startTime={startTime}
								endTime={endTime}
								curYear={curYear}
								curMonth={curMonth}
								moodsArr={moodsArr}
								openFilterModal={this.toggleFilterModal(true)}
							/>
						</Route>
						<Route path='/calendar/day/:date'>
							<ShowDay
								moodsArr={moodsArr}
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
