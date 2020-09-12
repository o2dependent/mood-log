import colors from './colors';
import modalStyle from './ModalStyles';
import moodSliderStyles from './MoodSliderStyles';

// TODO clean up unused styles

let style = {
	moodForm: {
		display: 'grid',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		top: '50%',
		transform: 'translate(0,-50%)',
		height: 'fit-content',
		width: '50%',
		margin: '0 auto',
		padding: '1em 0.5em',
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
			width: '90%',
			'& h1': {
				fontSize: '5vw',
			},
		},
	},
	submitBtn: {
		'&.MuiButton-root:hover': {
			transitionDuration: '400ms',
			backgroundColor: colors.card.itemSecondary,
		},
		color: colors.white,
		background: colors.card.itemPrimary,
		marginTop: '2.5%',
		marginLeft: 'auto',
		fontSize: '2vh',
		fontWeight: '500',
		outline: 'none',
		border: 'none',
		width: 'fit-content',
		padding: '2% 10%',
	},
	emoji: {
		margin: '0',
		width: '100%',
	},
	sliderLabel: {
		textAlign: 'left',
		margin: '0',
		marginTop: '2vh',
	},
};

style = Object.assign(style, modalStyle, moodSliderStyles);

export default style;
