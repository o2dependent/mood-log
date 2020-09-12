import colors from './colors';

const modalStyle = {
	modalContainer: {
		zIndex: '1000',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		animation: '$fadeIn 150ms linear',
	},
	modalBG: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: '#00000065',
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
};

export default modalStyle;
