import { DefaultTheme } from 'react-native-paper';

export const theme = {
	...DefaultTheme,
	roundness: 10,
	colors: {
		...DefaultTheme.colors,
		
		primary: '#32B768',
        accent: '#FFFFFF',
        background: '#FFFFFF',
        text: '#52665A',

		green_dark: '#2B7A4B',
		green_light: '#DAF2E4',

		body_dark: '#738078',
		body_light: '#AAB2AD',

		shape: '#F0F0F0',
		gray: '#CFCFCF',

		blue: '#3D7199',
		blue_light: '#EBF6FF',

		red: '#E83F5B',
	},
};

export default theme;