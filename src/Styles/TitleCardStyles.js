import colors from './colors';
import { makeStyles } from '@material-ui/styles';

// TODO clean up unused styles

const useStyles = makeStyles({
	titleCard: {
		zIndex: 100,
		display: 'flex',
		alignItems: 'flex-end',
		position: 'sticky',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		top: 0,
		left: 0,
		width: '100%',
		height: 'fit-content',
		padding: '2vh 0',
		color: colors.white,
		background: colors.bgAccent,
	},
	titleContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 'fit-content',
		width: '95%',
		margin: '0 auto',
		'& .MuiSvgIcon-root': {
			fontSize: '4.5vh',
			color: colors.white,
		},
	},
	titleText: {
		position: 'absolute',
		bottom: '0',
		left: '50%',
		margin: '0 auto',
		fontSize: '3.25vh',
		boxSizing: 'border-box',
		width: 'fit-content',
		boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.25)',
		padding: '1% 5%',
		borderRadius: '5px',
		transform: 'translate(-50%,25%)',
		background: colors.lightPurp,
		fontWeight: 400,
		transition: 'all 300ms',
		'& span': {
			overflow: 'hidden',
			width: 'fit-content',
		},
	},
});

export default useStyles;
