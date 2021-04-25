import React from 'react';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    DrawerItemContainer,
    TitleContainer,
    TitleText,
} from './styles';

const DrawerItem = ({ item, selected, onPressItem }) => {
    const { colors } = useTheme();

    return (
        <DrawerItemContainer
            onPress={() => onPressItem(item.routerName)}
            hitSlop={{
                top: 15,
                right: 15,
                bottom: 15,
                left: 15,
            }}
        >
            <TitleContainer selected={selected}>
                <Icon 
                    name={item.icon}
                    size={24}
                    style={{
                        marginHorizontal: 15,
                        color: selected ? colors.green_dark : colors.text,
                    }}
                />

                <TitleText selected={selected}>
                    {item.title}
                </TitleText>
            </TitleContainer>
        </DrawerItemContainer>
    )
}

export default DrawerItem;