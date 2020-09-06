import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MoodFeed from './MoodFeed';
import CalendarContainer from './CalendarContainer';
import MoodForm from './MoodForm';
import ShowDay from './ShowDay';

class App extends Component {
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
		const { moodsArr } = this.state;
		return (
			<div className='App'>
				{
					/* Mood Modal */
					this.state.showMoodForm && (
						<MoodForm
							addNewMood={this.addNewMood}
							removeMoodForm={this.removeMoodForm}
						/>
					)
				}
				<Switch>
					<Route exact path='/'>
						<MoodFeed
							addNewMood={this.addNewMood}
							showMoodForm={this.showMoodForm}
						/>
					</Route>
					<Route exact path='/calendar'>
						<CalendarContainer moodsArr={moodsArr} />
					</Route>
					<Route path='/calendar/day/:date'>
						<ShowDay
							moodsArr={moodsArr}
							removeMood={this.removeMood}
						/>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;
