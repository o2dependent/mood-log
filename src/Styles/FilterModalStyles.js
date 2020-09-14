import modalStyle from './ModalStyles';
import colors from './colors';
import moodSliderStyles from './MoodSliderStyles';

let style = {
	filterForm: {
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
			'& h1': {
				fontSize: '5vw',
			},
		},
	},
};

Object.assign(style, modalStyle, moodSliderStyles);

export default style;
