import React from 'react';

import {
    DrawerContainer,
    CompanyContainer,
    CompanyImage,
    CompanyText,
} from './styles';

import DrawerItem from '../DrawerItem';

import icon from '../../assets/icon.png';

const Drawer = ({ navigation, state }) => {
    const handleSelectMenu = (screen) => {
        navigation.closeDrawer();

        navigation.navigate(screen);
    };

    const itensMenu = [
        {
            title: 'Início',
            icon: 'home',
            routerName: 'Dashboard',
        },
        {
            title: 'Minhas Plantas',
            icon: 'flower',
            routerName: 'PlantsCollection',
        },
        {
            title: 'Sair',
            icon: 'logout',
            routerName: 'LogOff',
        },
    ];

    return (
        <DrawerContainer>
            {itensMenu.map(item => (
                <DrawerItem
                    key={item.title}
                    item={item}
                    selected={item.routerName === state.routeNames[state.index]}
                    onPressItem={handleSelectMenu}
                />
            ))}

            <CompanyContainer>
                <CompanyImage
                    source={icon}
                    resizeMode="contain"
                />

                <CompanyText>
                    Plant Manager
                </CompanyText>
            </CompanyContainer>
        </DrawerContainer>
    )
}

export default Drawer;