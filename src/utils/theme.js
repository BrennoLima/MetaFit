import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		secondary: {
			main: '#fbaf1d',
		},
	},
	typography: {
		button: {
			textTransform: 'none',
		},
	},
});
