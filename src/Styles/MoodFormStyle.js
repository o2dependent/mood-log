import colors from './colors';
import modalStyle from './ModalStyles';
import moodSliderStyles from './MoodSliderStyles';

// TODO clean up unused styles

let style = {
	moodForm: {
		fontSize: '2em',
		display: 'grid',
		gridTemplateColumns: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 'fit-content',
		width: '100%',
		margin: '0',
		padding: '2vh 2.5%',
		paddingTop: '4vh',
		background: colors.bgAccent,
		borderRadius: '10px',
		color: colors.white,
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		'& h1': {
			fontSize: '2rem',
			fontWeight: '300',
		},
		'@media (max-width: 700px)': {
			width: '100%',
			'& h1': {
				fontSize: '1.2rem',
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
