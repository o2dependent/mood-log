import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import colors from '../Styles/colors';

const MoodTextField = withStyles({
	root: {
		width: '90%',
		margin: '0 auto',
		marginBottom: '2%',
		marginTop: '2%',
		'& *': {
			textAlign: 'left',
			fontSize: '1.5rem',
		},
		'&input:-internal-autofill-selected,input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus': {
			border: 'none',
			backgroundColor: 'transparent',
			WebkitTextFillColor: colors.white,
			WebkitBoxShadow: 'none',
			transition: 'background-color 5000s ease-in-out 0s',
		},
		'& label': {
			fontWeight: '300',
			color: colors.white,
		},
		'& label.Mui-focused': {
			color: colors.white,
		},
		'& .MuiInputBase-input': {
			color: colors.white,
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
				fontSize: '1.5rem',
			},
			'& label': {
				fontSize: '1.5rem',
			},
		},
	},
})(TextField);

export default MoodTextField;
