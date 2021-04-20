import React from 'react';

import { Text } from 'react-native';

import { useTheme } from 'react-native-paper';

import {
    CategoryItemContainer,
} from './styles'

const CategoryItem = ({ item, selectedItem, onPressItem }) => {
    const { colors } = useTheme();

    const checkIndexIsEven = (element) => {
        return element % 2 == 0;
    }

    return (
        <CategoryItemContainer
            onPress={() => onPressItem(item)}
            activeOpacoty={0.8}
            style={{
                backgroundColor: selectedItem.id === item.id
                    ? colors.green_light
                    : colors.shape
            }}
        >
            <Text
                style={{
                    color: selectedItem.id === item.id
                        ? colors.green_dark
                        : colors.text,
                    fontWeight: selectedItem.id === item.id
                        ? 'bold'
                        : 'normal',
                }}
            >
                {item.nome}
            </Text>
        </CategoryItemContainer>
    )
};

export default CategoryItem;