import colors from './colors';
import { makeStyles } from '@material-ui/styles';

// TODO clean up unused styles

const useStyles = makeStyles({
	showDay: {
		boxSizing: 'border-box',
		height: '100%',
		width: '100%',
		background: colors.bgAccent,
		color: colors.white,
		margin: 0,
		padding: '4vh 2.5%',
	},
	dayItemContainer: {
		position: 'relative',
		background: colors.card.bgCard,
		boxShadow:
			'0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 7px rgba(0, 0, 0, 0.5)',
		borderRadius: '5px',
		padding: '1vh 0',
		paddingBottom: '3.2vh',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: (dayArr) =>
			`fit-content(1fr) repeat(${dayArr.length}, 1fr)`,
		'& h4': {
			paddingBottom: '10px',
		},
	},
	dayItem: {
		display: 'grid',
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
		background: `${colors.medPurp}80`,
		margin: 0,
		height: '100%',
		width: '100%',
		fontSize: '3.5vw',
	},
	dayNotes: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& p': {
			fontSize: '4vw',
		},
		'&.noNote p': {
			opacity: '50%',
		},
	},
	dayEmoji: {
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
			background: colors.pink,
			transform: 'translate(50%, 45%)',
			boxShadow: '0px 7px 7px rgba(0, 0, 0, 0.45)',
		},
		'&.MuiButton-root': {},
		'&.moodLogsButton': {
			background: colors.lightPurp,
			'&.MuiButton-root:hover': {
				background: colors.lightPurp,
			},
		},
		boxSizing: 'border-box',
		transition: 'all 200ms',
		boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.25)',
		color: colors.white,
		background: colors.pink,
		fontSize: '2vw',
		fontWeight: '400',
		outline: 'none',
		border: 'none',
		transform: 'translate(50%, 50%)',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '50%',
		height: 'fit-content',
		padding: '0',
		borderRadius: '5px',
		textTransform: 'none',
		'@media (max-width: 800px)': {
			fontSize: '5vw',
		},
	},
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
			gridColumn: '1/3',
			paddingBottom: '2%',
		},
		'& p': {
			boxSizing: 'border-box',
			height: '100%',
			width: '100%',
			background: colors.card.itemPrimary,
			fontSize: '2vh',
			textAlign: 'left',
			padding: '10% 5%',
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
});

export default useStyles;
