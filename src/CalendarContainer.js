import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/styles';
import colors from './colors';
import Calendar from './Calendar';
import { Switch, FormControlLabel, Select, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const style = {
	moodCalendarContainer: {
		fontWeight: 300,
		background: colors.bgPurp,
		minHeight: '100vh',
		'& h1': {
			margin: '0 auto',
		},
	},
	titleCard: {
		position: 'fixed',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		top: 0,
		left: 0,
		width: '100vw',
		height: 'fit-content',
		color: colors.white,
		background: colors.bgAccent,
		'& h4': {
			fontSize: '2vh',
			fontWeight: 400,
			margin: 0,
			marginTop: '5px',
		},
	},
	titleMonth: {
		fontSize: '3.25vh',
		boxSizing: 'border-box',
		width: 'fit-content',
		boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.25)',
		padding: '1% 5%',
		borderRadius: '5px',
		transform: 'translate(0,25%)',
		background: colors.lightPurp,
		fontWeight: 400,
		transition: 'all 300ms',
		'& span': {
			overflow: 'hidden',
			width: 'fit-content',
			transition: 'all 300ms',
		},
	},
	titleMonthCollapsed: {
		'&$titleMonth': {
			transform: 'translate(0,50%)',
			boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
			'& span': {
				fontSize: '0px',
			},
		},
	},
	filterButtons: {
		height: 'fit-content',
		width: '100%',
		maxWidth: '700px',
		margin: '1vh auto',
		transition: 'all 250ms',
		overflow: 'hidden',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(2, fit-content(1fr))',
		gridRowGap: '0.5vh',
	},
	hideFilters: {
		opacity: 0,
		maxHeight: '0',
	},
	showFilters: {
		opacity: 1,
		maxHeight: '15vh',
	},
	filterContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	switch: {
		'& .MuiSwitch-switchBase': {
			color: colors.white,
		},
		'& .MuiSwitch-track': {
			backgroundColor: colors.lightPurp,
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			opacity: 0.99,
		},
	},
	switchLabel: {
		color: colors.white,
		width: 'fit-content',
		height: 'fit-content',
		margin: '0 auto',
		'& .MuiTypography-body1': {
			fontSize: '1.75vh',
		},
	},
	select: {
		width: 'fit-content',
		minWidth: '35%',
		'& .MuiInputBase-input': {
			fontSize: '1.75vh',
			color: colors.white,
		},
		'& .MuiSelect-icon': {
			color: colors.white50,
		},
		'&.MuiInput-underline': {
			'&:hover': {
				'&:before': {
					borderBottom: `2px solid ${colors.white}3A`,
				},
			},
			'&:before': {
				borderBottom: `2px solid ${colors.white50}`,
			},
			'&:after': {
				borderBottom: `2px solid ${colors.white}`,
			},
		},
	},
	backButton: {
		position: 'absolute',
		top: 0,
		left: 0,
		marginTop: '0.5vh',
		marginLeft: '0.5vw',
	},
};

class CalendarContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curMonth: moment().format('MMMM'),
			curYear: moment().format('YYYY'),
			startTime: 0,
			endTime: 23,
			calendarFilters: new Set(['fullCalendar']),
			titleCollapsed: false,
		};
		this.weekdayShort = moment.weekdaysShort();
		this.titleCardHeight = '';
	}

	// Add scroll event
	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);

		this.titleCardHeight = document.querySelector(
			`.${this.props.classes.titleCard}`
		).offsetHeight;
		this.setState({});
	};
	// Remove scroll event
	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.handleScroll);
	};
	// Scroll handler
	handleScroll = (e) => {
		const scrollY = window.scrollY,
			titleHeight = this.titleCardHeight;

		if (scrollY * 2 >= titleHeight && !this.state.titleCollapsed) {
			this.setState({ titleCollapsed: true });
		} else if (scrollY * 2 < titleHeight && this.state.titleCollapsed) {
			this.setState({ titleCollapsed: false });
		}
	};
	// Return array of days in current month and any logged moods --- day = { day: DAY_NUM,event: [...MOOD_EVENTS] }
	getDaysInMonth = () => {
		const dateObject = moment(
			`${this.state.curMonth} ${this.state.curYear}`
		);
		const lastDay = moment(dateObject).endOf('month').format('D');
		const { startTime, endTime } = this.state;

		const daysArr = new Array(Number(lastDay))
			.fill()
			.map((v, i) => ({ day: i + 1, event: [] }));

		this.props.moodsArr.forEach((m) => {
			const newMoment = moment(m.moment);
			const dayIdx = Number(newMoment.format('D')) - 1;

			const month = newMoment.format('MMMM');
			const year = newMoment.format('YYYY');
			const dateValid =
				month === this.state.curMonth && year === this.state.curYear;

			const time = Number(newMoment.format('H'));
			const timeValid = time >= startTime && time <= endTime;

			if (dateValid && timeValid) {
				daysArr[dayIdx].event.push(m);
			}
		});

		if (this.state.calendarFilters.has('onlyMoods')) {
			return daysArr.filter((d) => d.event.length !== 0);
		}

		return daysArr;
	};
	// Switch
	handleSwitchFilters = (e) => {
		const newFilters = this.state.calendarFilters;
		e.target.checked
			? newFilters.add(e.target.name)
			: newFilters.delete(e.target.name);
		this.setState({ calendarFilters: newFilters });
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
	// Format options for select month input field
	formatOptionsMonth = () => {
		const months = moment.months();
		const options = months.map((m) => (
			<MenuItem key={m} value={m}>
				{m.slice(0, 3)}
			</MenuItem>
		));
		return options;
	};
	// Format options for select year field
	formatOptionsYear = () => {
		const curYear = Number(moment().format('YYYY'));
		const years = new Array(curYear - 2019).fill().map((y, i) => 2020 - i);
		const options = years.map((y) => (
			<MenuItem key={y} value={y}>
				{y}
			</MenuItem>
		));
		return options;
	};
	formatOptionsTime = (minTime) => {
		const times = [...Array(24).keys()].splice(minTime, 24);
		const options = times.map((t) => (
			<MenuItem key={t} value={t}>
				{`${((t + 11) % 12) + 1}:00 ${t >= 12 ? 'pm' : 'am'}`}
			</MenuItem>
		));
		return options;
	};
	// Handler for month select field
	handleSelect = (e) => {
		this.setState({ [e.target.name]: String(e.target.value) });
	};
	// Render
	render() {
		// Extracted values
		const {
			calendarFilters,
			curMonth,
			curYear,
			titleCollapsed,
			startTime,
			endTime,
		} = this.state;
		const { classes } = this.props;
		// Returned dom values
		const curMonthFormatted = this.formatMonth();
		const days = this.getDaysInMonth();
		const optionsMonth = this.formatOptionsMonth();
		const optionsYear = this.formatOptionsYear();
		const optionsStartTime = this.formatOptionsTime(0);
		const optionsEndTime = this.formatOptionsTime(startTime);
		// State testing variables
		const onlyMoods = calendarFilters.has('onlyMoods');
		const fullCalendar = calendarFilters.has('fullCalendar');
		const winWidth = window.innerWidth;
		console.log(winWidth);
		return (
			<div className={classes.moodCalendarContainer}>
				<div className={classes.titleCard}>
					<Link className={classes.backButton} to='/'></Link>
					<h4>Check your moods</h4>
					<div
						className={`${classes.filterButtons} ${
							titleCollapsed
								? classes.hideFilters
								: classes.showFilters
						}`}
					>
						<FormControlLabel
							className={classes.switchLabel}
							labelPlacement='start'
							control={
								<Switch
									size={winWidth < 500 ? 'small' : 'medium'}
									className={classes.switch}
									color='default'
									checked={onlyMoods}
									name='onlyMoods'
									onChange={this.handleSwitchFilters}
								/>
							}
							label='Only moods'
						/>
						<FormControlLabel
							className={classes.switchLabel}
							labelPlacement='start'
							control={
								<Switch
									size={winWidth < 500 ? 'small' : 'medium'}
									className={classes.switch}
									color='default'
									checked={fullCalendar}
									name='fullCalendar'
									onChange={this.handleSwitchFilters}
								/>
							}
							label='Full Calendar'
						/>
						<div className={classes.filterContainer}>
							<Select
								className={classes.select}
								name='curMonth'
								value={curMonth}
								onChange={this.handleSelect}
							>
								{optionsMonth}
							</Select>
							<Select
								className={classes.select}
								name='curYear'
								value={curYear}
								onChange={this.handleSelect}
							>
								{optionsYear}
							</Select>
						</div>
						<div className={classes.filterContainer}>
							<Select
								className={classes.select}
								name='startTime'
								value={startTime}
								onChange={this.handleSelect}
							>
								{optionsStartTime}
							</Select>
							<Select
								className={classes.select}
								name='endTime'
								value={endTime}
								onChange={this.handleSelect}
							>
								{optionsEndTime}
							</Select>
						</div>
					</div>

					<h1
						className={`${classes.titleMonth} ${
							titleCollapsed ? classes.titleMonthCollapsed : ''
						}`}
					>
						{curMonthFormatted.first}
						{curMonthFormatted.last}
						{` ${curYear}`}
					</h1>
				</div>

				<Calendar
					curMonth={curMonth}
					curYear={curYear}
					fullCalendar={fullCalendar}
					days={days}
					paddingTop={this.titleCardHeight}
				/>
			</div>
		);
	}
}

export default withStyles(style)(CalendarContainer);
