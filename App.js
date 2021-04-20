import React from 'react';

import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';

import theme from './src/theme/theme';

import Navigation from './src/navigation';

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#FFF" />

			<PaperProvider theme={theme}>
				<Navigation />
			</PaperProvider>
		</>
	);
}
