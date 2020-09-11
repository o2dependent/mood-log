import colors from './colors';

const { makeStyles } = require('@material-ui/styles');

const useStyles = makeStyles({
	filterContainer: {
		zIndex: 1000,
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		padding: '2vh 5%',
	},
	modalBG: {
		zIndex: 999,
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100vw',
		background: 'rgba(0,0,0,0.5)',
	},
});

export default useStyles;
