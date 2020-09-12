import colors from './colors';

const { makeStyles } = require('@material-ui/styles');

const useStyles = makeStyles({
	filterButton: {
		'&.MuiFab-root': {
			transition: 'box-shadow 500ms, transform 500ms',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			width: '6vh',
			height: '6vh',
			bottom: '2vh',
			right: '4vw',
			background: colors.card.itemPrimary,
			'&:hover': {
				background: colors.card.itemPrimary,
			},
		},
		animation: '$filterShake 1500ms ease-in-out 5000ms',
		'& *': {
			color: colors.white,
		},
	},
	'@keyframes filterShake': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'30%': {
			transform: 'rotate(-15deg)',
		},
		'50%': {
			transform: 'rotate(15deg)',
		},
		'70%': {
			transform: 'rotate(-15deg)',
		},
		'100%': {
			transform: 'rotate(0deg)',
		},
	},
});

export default useStyles;
