import React from 'react';

import { StyleSheet, StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as PaperProvider } from 'react-native-paper';

import theme from './src/theme/theme';

import Navigation from './src/navigation';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" backgroundColor="#FFF" />

			<PaperProvider theme={theme}>
				<View style={styles.container}>
					<Navigation />
				</View>
			</PaperProvider>
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
