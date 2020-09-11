const modalStyle = {
	modalContainer: {
		zIndex: '1000',
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		animation: '150ms $fadeIn linear',
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
};

export default modalStyle;
