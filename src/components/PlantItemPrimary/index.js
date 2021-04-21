import React from 'react';

import { SvgFromUri } from 'react-native-svg';

import {
    PlantItemContainer,
    ItemTitle,
} from './styles';

const PlantItemPrimary = ({ item, onPressItem }) => {
    if(item.empty) {
        return (
            <PlantItemContainer
                style={{
                    backgroundColor: 'transparent',
                }}
            />
        )
    }

    return (
        <PlantItemContainer
            onPress={() => onPressItem(item)}
            activeOpacoty={0.8}
        >
            <SvgFromUri
                uri={item.photo}
                height={70}
                width={70}
            />

            <ItemTitle>
                {item.name}
            </ItemTitle>
        </PlantItemContainer>
    )
}

export default PlantItemPrimary;