import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'react-native-paper';

import Welcome from '../screens/Welcome';

import LogOn from '../screens/LogOn';

import Confirmation from '../screens/Confirmation';

import Gratefullness from '../screens/Gratefullness';

import Dashboard from '../screens/Dashboard';

import ViewPlant from '../screens/ViewPlant';

import PlantsCollection from '../screens/PlantsCollection';

const Stack = createStackNavigator();

const StackRoutes = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: colors.background
                }
            }}
            initialRouteName={'PlantsCollection'}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            
            <Stack.Screen name="LogOn" component={LogOn} />
            
            <Stack.Screen name="Confirmation" component={Confirmation} />

            <Stack.Screen name="Dashboard" component={Dashboard} />

            <Stack.Screen name="ViewPlant" component={ViewPlant} />
            
            <Stack.Screen name="Gratefullness" component={Gratefullness} />

            <Stack.Screen name="PlantsCollection" component={PlantsCollection} />
        </Stack.Navigator>
    );
};

export default StackRoutes;