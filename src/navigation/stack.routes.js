import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'react-native-paper';

import Welcome from '../screens/Welcome';

import LogOn from '../screens/LogOn';

import Confirmation from '../screens/Confirmation';

import Gratefullness from '../screens/Gratefullness';

import ViewPlant from '../screens/ViewPlant';

import DrawerRoutes from './drawer.routes';

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
            initialRouteName={'Welcome'}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            
            <Stack.Screen name="LogOn" component={LogOn} />
            
            <Stack.Screen name="Confirmation" component={Confirmation} />

            <Stack.Screen name="Dashboard" component={DrawerRoutes} />

            <Stack.Screen name="ViewPlant" component={ViewPlant} />
            
            <Stack.Screen name="Gratefullness" component={Gratefullness} />

            <Stack.Screen name="PlantsCollection" component={DrawerRoutes} />
        </Stack.Navigator>
    );
};

export default StackRoutes;