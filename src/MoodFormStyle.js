import colors from './colors';

/* ------------------------ Style object for MoodForm ----------------------- */
const style = {
	modalContainer: {
		zIndex: '1000',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		animation: '150ms $fadeIn linear',
	},
	modalBG: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: '#00000065',
	},
	moodForm: {
		fontFamily: 'Raleway, sans-serif',
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
		'@media (max-width: 350px)': {
			width: '90%',
		},
	},
	emojiContainer: {
		boxSizing: 'border-box',
		boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.25)',
		padding: '1em',
		margin: '0 auto',
		display: 'grid',
		width: '90%',
		gridTemplateColumns: 'repeat(5,1fr)',
		gridColumnGap: '5px',
		background: colors.lightPurp,
		borderRadius: '5px',
	},
	submitBtn: {
		'&.MuiButton-root:hover': {
			transitionDuration: '400ms',
			backgroundColor: colors.medPurp,
		},
		fontFamily: 'Raleway, sans-serif',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
		color: colors.white,
		background: colors.pink,
		fontSize: '3vw',
		fontWeight: '400',
		outline: 'none',
		border: 'none',
		transform: 'translate(50%, 50%)',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '50%',
		height: '20%',
		borderRadius: '10px',
		textTransform: 'none',
	},
	emoji: {
		transition: 'all 500ms',
		margin: '1%',
		width: '90%',
		opacity: '0.7',
		'&:hover': {
			opacity: '1',
			transform: 'scale(1.2)',
		},
	},
	active: {
		'&$emoji': {
			opacity: '1',
			transform: 'scale(1.1)',
			'&:hover': {
				transform: 'scale(1.2)',
			},
		},
	},
	'@keyframes fadeIn': {
		from: {
			opacity: 0,
		},
		to: {
			opacity: 1,
		},
	},
	'@keyframes fadeOut': {
		from: {
			opacity: 1,
		},
		to: {
			opacity: 0,
		},
	},
};
export default style;
