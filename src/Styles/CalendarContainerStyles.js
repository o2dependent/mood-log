import colors from './colors';

// TODO clean up unused styles

const style = {
	moodCalendarContainer: {
		fontWeight: 300,
		background: colors.bgPurp,
		height: '100%',
		'& h1': {
			margin: '0 auto',
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

export default style;