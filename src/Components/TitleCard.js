import React, { useState } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { Link, useLocation } from 'react-router-dom';
import useStyles from '../Styles/TitleCardStyles';
import { Button } from '@material-ui/core';

export default function TitleCard(props) {
	const [drawerOpen, setDrawer] = useState(false);
	const classes = useStyles();
	const curLoc = useLocation().pathname;
	const { curMonthFormatted, curYear, showMoodForm } = props;

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

	return (
		<div
			className={classes.titleCard}
			style={drawerOpen ? { minHeight: '100vh' } : {}}
		>
			{/* TODO optimize drawer code */}
			<div
				className={classes.navContainer}
				style={
					drawerOpen
						? {
								transition:
									'height 0ms 500ms, opacity 500ms 500ms, padding 500ms 100ms',
								opacity: '1',
						  }
						: {
								height: '0',
								padding: '0',
								transition:
									'height 250ms, opacity 100ms, padding 100ms 200ms',
								opacity: '0',
						  }
				}
			>
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
			</div>
			<div className={classes.titleContainer}>
				{curLoc === '/calendar' ? (
					<AddCircleOutlineIcon onClick={showMoodForm} />
				) : (
					<Link
						to='/calendar'
						onClick={drawerOpen && toggleDrawer(false)}
					>
						<ArrowBackIosOutlinedIcon />
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
		</div>
	);
}
