import React from 'react';

import { useNavigation } from '@react-navigation/core';

import {
    PlantItemContainer,
    PlantItemTransparent,
    ItemTitle,
} from './styles';

const PlantItem = ({ item, onPressItem }) => {
    const navigation = useNavigation();

    const handleForwardNavigation = (screen) => {
        navigation.navigate(screen);
    }

    if(item.empty) {
        return (
            <PlantItemTransparent />
        )
    }

    return (
        <PlantItemContainer
            onPress={() => onPressItem(item)}
            activeOpacoty={0.8}
        >
            <ItemTitle>
                {item.nome}
            </ItemTitle>
        </PlantItemContainer>
    )
}

export default PlantItem;