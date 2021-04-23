import React, { useEffect, useState } from 'react';

import { Dimensions } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';

import PlantsCollection from '../screens/PlantsCollection';

import LogOff from '../screens/LogOff';

import DrawerComponent from '../components/Drawer';

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    const [initRender, setInitRender] = useState(true);

    useEffect(() => {
        setInitRender(false);
    }, [initRender]);

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Dashboard"
            drawerContent={DrawerComponent}
            drawerStyle={{
                width: initRender ? null : Dimensions.get('window').width * 0.6,
            }}
        >
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            
            <Drawer.Screen name="PlantsCollection" component={PlantsCollection} />
            
            <Drawer.Screen
                name="LogOff"
                component={LogOff}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;