import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Fab } from '@material-ui/core';
import useStyles from '../Styles/FilterButtonStyles';

export default function FilterButton(props) {
	const classes = useStyles();
	const { open } = props;

	return (
		<Fab className={classes.filterButton} onClick={open}>
			<FilterListIcon />
		</Fab>
	);
}
