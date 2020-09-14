import colors from './colors';
import { makeStyles } from '@material-ui/styles';
import chroma from 'chroma-js';

// TODO clean up unused styles

const useStyles = makeStyles({
	showDay: {
		boxSizing: 'border-box',
		height: '100%',
		width: '100%',
		background: colors.bg,
		color: colors.white,
		margin: 0,
		padding: '4vh 2.5%',
	},
	showDayContainer: {
		'@media (min-width: 960px)': {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			gridColumnGap: '10px',
		},
	},
	dayItemContainer: {
		position: 'relative',
		background: colors.card.bgCard,
		boxShadow:
			'0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 7px rgba(0, 0, 0, 0.5)',
		borderRadius: '5px',
		padding: '1vh 0',
		display: 'grid',
		gridTemplateColumns: '1fr',
		'& h4': {
			fontWeight: 300,
			paddingBottom: '10px',
		},
		'& p': {
			fontSize: '3.4vw',
		},
		'@media (min-width: 960px)': {
			'& p': {
				fontSize: '1.1em',
			},
			'& h4': {
				fontSize: '1.25em',
				paddingBottom: '10px',
			},
		},
	},
	dayItem: {
		display: 'grid',
		overflow: 'hidden',
		gridTemplateColumns: '1.5fr 6fr 1.5fr',
		gridTemplateRows: '1fr',
		padding: '0',
		background: colors.card.itemPrimary,
		textAlign: 'center',
		'&:nth-of-type(2n)': {
			background: colors.card.itemSecondary,
		},
	},
	dayTime: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: `${colors.med}80`,
		margin: 0,
		height: '100%',
		width: '100%',
		fontSize: '3.5vw',
	},
	dayNotes: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&.noNote p': {
			opacity: '50%',
		},
	},
	dayEmoji: {
		position: 'relative',
		overflow: 'hidden',
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& img': {
			maxHeight: '85%',
			maxWidth: '100%',
		},
	},
	cardButton: {
		'&.MuiButton-root:hover': {
			transition: 'all 400ms',
			background: colors.card.itemSecondary,
		},
		'&.MuiButton-root': {},
		'&.moodLogsButton': {
			background: colors.light,
			'&.MuiButton-root:hover': {
				background: colors.light,
			},
		},
		marginRight: '0',
		marginLeft: 'auto',
		boxSizing: 'border-box',
		transition: 'all 200ms',
		color: colors.white,
		background: colors.card.itemPrimary,
		fontSize: '4vw',
		fontWeight: '400',
		outline: 'none',
		border: 'none',
		width: '90%',
		height: 'fit-content',
		padding: '0',
		borderRadius: '5px',
		textTransform: 'none',
		'&:first-of-type': {
			marginRight: 'auto',
			marginLeft: '0',
		},
		'&$deleteButton': {},
		'@media (min-width: 960px)': {
			fontSize: '1.25em',
		},
	},
	deleteButton: {},
	dayAvg: {
		marginTop: '4vh',
		borderRadius: '5px',
		padding: '2vh 0',
		display: 'grid',
		gridTemplateColumns: '3fr 1fr',
		gridTemplateRows: '1fr',
		background: colors.card.bgCard,
		boxShadow:
			'0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 7px rgba(0, 0, 0, 0.5)',
		'& h4': {
			fontWeight: 300,
			gridColumn: '1/3',
			paddingBottom: '10px',
		},
		'& p': {
			boxSizing: 'border-box',
			height: '100%',
			width: '100%',
			background: colors.card.itemPrimary,
			fontSize: '3.4vw',
			textAlign: 'left',
			padding: '10% 5%',
		},
		'@media (min-width: 960px)': {
			margin: 0,
			'& p': {
				fontSize: '1.1em',
			},
			'& h4': {
				fontSize: '1.25em',
				paddingBottom: '10px',
			},
		},
	},
	dayAvgEmoji: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		'& img': {
			height: '90%',
			width: '100%',
		},
	},
	buttonContainer: {
		width: '95%',
		margin: '0 auto',
		marginTop: '2.5%',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
	},
	deleteMood: {
		zIndex: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		width: '200%',
		height: '200%',
		background: chroma
			.scale([colors.danger, colors.card.itemPrimary])
			.colors(10)[2],
	},
});

export default useStyles;
