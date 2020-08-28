import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MoodFeed from './MoodFeed';
import MoodCalendar from './MoodCalendar';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<MoodFeed />
				</Route>
				<Route exact path='/calendar'>
					<MoodCalendar />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
