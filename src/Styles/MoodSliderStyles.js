import colors from './colors';

const moodSliderStyles = {
	moodSlider: {
		transition: 'color 500ms',
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
		transition: 'color 500ms',
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
};
export default moodSliderStyles;
