import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { Link, useLocation } from 'react-router-dom';
import useStyles from '../Styles/TitleCardStyles';

export default function TitleCard(props) {
	const classes = useStyles();
	const curLoc = useLocation().pathname;
	const { curMonthFormatted, curYear, showMoodForm } = props;

	return (
		<div className={classes.titleCard}>
			<div className={classes.titleContainer}>
				{curLoc === '/calendar' ? (
					<AddCircleOutlineIcon onClick={showMoodForm} />
				) : (
					<Link to='/calendar'>
						<ArrowBackIosOutlinedIcon />
					</Link>
				)}

				<h1 className={classes.titleText}>
					{curMonthFormatted.first}
					{curMonthFormatted.last}
					{` ${curYear}`}
				</h1>
				{/* TODO add material ui drawer from the top for navigation */}
				<MenuIcon />
			</div>
		</div>
	);
}
