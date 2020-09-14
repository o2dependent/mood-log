import colors from './colors';

const style = {
	app: {
		height: 'auto',
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		background: colors.bg,
	},
	page: {
		overflowX: 'hidden',
		marginTop: '10vh',
		maxHeight: '90vh',
		flexGrow: 1,
	},
};

export default style;
