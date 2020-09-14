import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { Link, useLocation } from 'react-router-dom';
import useStyles from '../Styles/TitleCardStyles';
import { Button } from '@material-ui/core';
import { motion } from 'framer-motion';

export default function TitleCard(props) {
	const [drawerOpen, setDrawer] = useState(false);
	const classes = useStyles();
	const curLoc = useLocation().pathname;
	const { curMonth, curYear, showMoodForm, titleDay } = props;

	const toggleDrawer = (open) => (e) => {
		if (
			e &&
			e.type === 'keydown' &&
			(e.key === 'Tab' || e.key === 'Shift')
		) {
			return;
		}

		setDrawer(open);
	};

	// Format month for collapsed and open states
	const formatMonth = () => {
		const month = curMonth;
		const first = month.slice(0, 3);
		const last = (
			<motion.span
				animate={{
					fontSize: titleDay ? '0' : '',
				}}
			>
				{month.slice(3)}
			</motion.span>
		);
		const formatted = {
			first: first,
			last: last,
		};
		return formatted;
	};

	const curMonthFormatted = formatMonth();

	return (
		<motion.div
			className={classes.titleCard}
			initial={{ y: '-90vh' }}
			animate={{ y: drawerOpen ? '0' : '-90vh' }}
			transition={{
				type: 'tween',
				duration: 0.75,
			}}
		>
			{/* TODO optimize drawer code */}
			<motion.div className={classes.navContainer}>
				<Link to='/calendar' onClick={toggleDrawer(false)}>
					<Button>Calendar</Button>
				</Link>
				<Link to='/calendar' onClick={toggleDrawer(false)}>
					<Button>Analysis</Button>
				</Link>
				<div className={classes.navBottom}>
					<Button>Profile</Button>
					<Button>Settings</Button>
				</div>
			</motion.div>
			<div className={classes.titleContainer}>
				{curLoc === '/calendar' ? (
					<AddCircleOutlineIcon onClick={showMoodForm} />
				) : (
					<Link to='/calendar'>
						<ArrowBackIosOutlinedIcon
							onClick={
								drawerOpen ? toggleDrawer(false) : undefined
							}
						/>
					</Link>
				)}

				<h1 className={classes.titleText}>
					{curMonthFormatted.first}
					{curMonthFormatted.last}
					{` ${curYear}`}
				</h1>
				<MenuIcon
					onClick={
						drawerOpen ? toggleDrawer(false) : toggleDrawer(true)
					}
				/>
			</div>
		</motion.div>
	);
}
