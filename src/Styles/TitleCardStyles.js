import colors from './colors';
import { makeStyles } from '@material-ui/styles';

// TODO clean up unused styles

const useStyles = makeStyles({
	titleCard: {
		boxSizing: 'border-box',
		zIndex: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'fixed',
		top: 0,
		left: 0,
		boxShadow:
			'0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 7px rgba(0, 0, 0, 0.5)',

		width: '100%',
		height: '100vh',
		padding: '2vh 0',
		color: colors.white,
		background: colors.bgAccent,
		transition: 'min-height 500ms cubic-bezier(0.46, 0.03, 0.8, 0.96)',
	},
	titleContainer: {
		display: 'flex',
		alignSelf: 'flex-end',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 'fit-content',
		width: '95%',
		margin: '0 auto',
		'& .MuiSvgIcon-root': {
			fontSize: '4.5vh',
			color: colors.white,
			cursor: 'pointer',
		},
	},
	titleText: {
		margin: '0',
		fontSize: '3.25vh',
		boxSizing: 'border-box',
		width: 'fit-content',
		padding: '1% 5%',
		borderRadius: '5px',
		background: colors.light,
		fontWeight: 400,
		transition: 'all 300ms',
		'& span': {
			overflow: 'hidden',
			width: 'fit-content',
		},
	},

	navContainer: {
		boxSizing: 'border-box',
		overflow: 'hidden',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(7, 1fr)',
		padding: '5vh 5%',
		height: '90vh',
		width: '95%',
		'& *': {
			textDecoration: 'none',
		},
		'& .MuiButton-root': {
			color: colors.white,
			height: '50%',
			width: '90%',
			margin: '0 auto',
			background: colors.card.itemPrimary,
		},
	},
	navBottom: {
		gridArea: '8 / 1 / 9 / 2',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		width: '90%',
		margin: '0 auto',
		'& .MuiButton-root': {
			color: colors.white,
			background: colors.card.itemSecondary,
			height: '100%',
			width: '90%',
			justifySelf: 'flex-end',
			margin: 0,
			'&:first-of-type': {
				justifySelf: 'flex-start',
			},
		},
	},
});

export default useStyles;
