import React from 'react';

import { StyleSheet, StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import appTheme from './src/theme';

import Navigation from './src/navigation';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#FFF" />

			<ThemeProvider theme={appTheme}>
				<View style={styles.container}>
					<Navigation />
				</View>
			</ThemeProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
});
