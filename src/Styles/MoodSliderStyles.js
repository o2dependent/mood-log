import colors from './colors';

const moodSliderStyles = {
	moodSlider: {
		width: '90%',
		transition: 'color 500ms',
		margin: '10px auto',
		padding: '0',
		'& .MuiSlider-track': {
			background: 'none',
			opacity: 1,
		},
		'& .MuiSlider-rail': {
			height: '10px',
			borderRadius: '5px',
			transform: 'translate(0,-50%)',
			opacity: 1,
		},
		'& .MuiSlider-thumb': {
			height: '10px',
			width: '10px',
			background: colors.white,
		},
	},
	anxietySlider: {
		width: '90%',
		transition: 'color 500ms',
		margin: '10px auto',
		padding: '0',
		'& .MuiSlider-track': {
			height: '10px',
			transform: 'translate(0,-50%)',
			borderRadius: '5px',
			opacity: 1,
		},
		'& .MuiSlider-rail': {
			height: '10px',
			borderRadius: '5px',
			transform: 'translate(0,-50%)',
		},
		'& .MuiSlider-thumb': {
			height: '10px',
			width: '10px',
			background: colors.white,
		},
	},
	timeSlider: {
		width: '90%',
		transition: 'color 500ms',
		padding: '0',
		margin: '10px auto',
		'& .MuiSlider-track': {
			height: '10px',
			borderRadius: '5px',
			transform: 'translate(0,-50%)',
			background: colors.card.itemSecondary,
		},
		'& .MuiSlider-rail': {
			height: '10px',
			borderRadius: '5px',
			transform: 'translate(0,-50%)',
			background: colors.light,
		},
		'& .MuiSlider-thumb': {
			height: '10px',
			width: '10px',
			background: colors.white,
		},
		'& .MuiSlider-valueLabel': {
			color: colors.card.itemPrimary,
		},
	},
	sliderLabel: {
		textAlign: 'left',
		margin: '0',
		marginTop: '2vh',
		marginLeft: '5%',
	},
};

export default moodSliderStyles;
