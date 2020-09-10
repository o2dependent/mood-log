import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import colors from '../Styles/colors';

const MoodTextField = withStyles({
	root: {
		width: '80%',
		marginBottom: '8%',
		marginTop: '2%',
		margin: '0 auto',
		'&input:-internal-autofill-selected,input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus': {
			border: 'none',
			backgroundColor: 'transparent',
			WebkitTextFillColor: colors.white,
			WebkitBoxShadow: 'none',
			transition: 'background-color 5000s ease-in-out 0s',
		},
		'& label': {
			fontSize: '2vw',
			fontWeight: '300',
			color: colors.white,
		},
		'& label.Mui-focused': {
			color: colors.white,
		},
		'& .MuiInputBase-input': {
			color: colors.white,
			fontSize: '2vw',
			fontWeight: '300',
		},
		'& .MuiInput-underline:after': {
			borderColor: colors.white,
		},
		'& .MuiInput-underline:before': {
			borderColor: colors.white50,
		},
		'& .MuiInput-underline:hover:before': {
			borderColor: colors.white50,
		},
		'@media (max-width: 800px)': {
			'& .MuiInputBase-input': {
				fontSize: '5vw',
			},
			'& label': {
				fontSize: '5vw',
			},
		},
	},
})(TextField);

export default MoodTextField;
