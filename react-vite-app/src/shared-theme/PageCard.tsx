import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignSelf: 'center',
	width: '100%',
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	margin: 'auto',
	[theme.breakpoints.up('sm')]: {
	maxWidth: '450px',
	},
	boxShadow:
	'hsla(280, 40%, 25%, 0.50) 0px 5px 15px 0px, hsla(280, 40%, 25%, 0.50) 0px 15px 35px -5px',
	...theme.applyStyles('dark', {
	boxShadow:
		'hsla(280, 40%, 25%, 0.50) 0px 5px 15px 0px, hsla(280, 40%, 25%, 0.50) 0px 15px 35px -5px',
	}),
}));