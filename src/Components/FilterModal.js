import React from 'react';
import useStyles from '../Styles/FilterModalStyles';

function FilterModal(props) {
	const classes = useStyles();
	return (
		<div className={classes.filterContainer}>
			<div className={classes.modalBG} />
		</div>
	);
}

export default FilterModal;
