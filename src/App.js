import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MoodCalendar from './MoodCalendar';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<MoodCalendar />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
