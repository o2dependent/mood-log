import React, { Component } from 'react';

class FilterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { classes } = this.props;
		const winWidth = window.innerWidth;
		return (
			<div
				className={`${classes.filterButtons} ${
					titleCollapsed ? classes.hideFilters : classes.showFilters
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
		);
	}
}

export default FilterModal;
