import colors from './colors';
import modalStyle from './ModalStyles';
import moodSliderStyles from './MoodSliderStyles';

// TODO clean up unused styles

let style = {
	moodForm: {
		display: 'grid',
		gridTemplateColumns: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'fit-content',
		width: '100%',
		margin: '0',
		padding: '1em 2.5%',
		paddingTop: '2em',
		background: colors.bgAccent,
		borderRadius: '10px',
		color: colors.white,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		'& h1': {
			fontSize: '2.5vw',
			fontWeight: '300',
		},
		'@media (max-width: 800px)': {
			width: '100%',
			'& h1': {
				fontSize: '5vw',
			},
		},
	},
	emoji: {
		margin: '0',
		width: '100%',
	},
};

style = Object.assign(style, modalStyle, moodSliderStyles);

export default style;
