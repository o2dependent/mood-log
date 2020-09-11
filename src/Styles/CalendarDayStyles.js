import colors from './colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	moodDay: {
		boxSizing: 'border-box',
		display: 'flex',
		position: 'relative',
		height: '100%',
		width: '100%',
		background: (props) =>
			props.day.event.length > 0
				? colors[
						'dateMood' +
							Math.round(
								props.day.event
									.map((e) => e.moodNum)
									.reduce((a, b) => a + b) /
									props.day.event.length
							)
				  ]
				: `${colors.light}2A`,
		'& p': {
			boxSizing: 'border-box',
			height: '3vh',
			width: '5vw',
			zIndex: 10,
			borderRadius: '0 0 5px 0',
			background: colors.bgAccent,
			position: 'absolute',
			textAlign: 'center',
			top: 0,
			left: 0,
			fontSize: '2vh',
			color: colors.white,
			margin: '0 auto',
		},
	},
	weekDay: {
		boxSizing: 'border-box',
		display: 'flex',
		height: '4vh',
		width: '100%',
		background: colors.bgAccent,
		'& p': {
			fontSize: '2vh',
			color: colors.white,
			margin: '0 auto',
			alignSelf: 'center',
		},
	},
	moodEventContainer: {
		display: 'grid',
		height: '100%',
		width: '100%',
		gridTemplateColumns: (props) => `repeat(${props.day.event.length},1fr)`,
	},
	seeMoreContainer: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		opacity: 0,
		background: `${colors.white}50`,
		transition: 'opacity 250ms',
		'&:hover': {
			opacity: 1,
		},
		'@media (max-width: 800px)': {
			background: 'none',
		},
	},
	seeMore: {
		boxSizing: 'border-box',
		fontSize: '1.5vh',
		height: 'fit-content',
		width: 'fit-content',
		padding: '0.75vh 1vw',
		borderRadius: '2px',
		boxShadow:
			'0px 1px 2px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		color: colors.white,
		background: colors.light,
		textDecoration: 'none',
		'@media (max-width: 800px)': {
			background: `${colors.white}55`,

			width: '100%',
			height: '100%',
			alignItems: 'center',
			paddingTop: '80%',
		},
	},
});

export default useStyles;
