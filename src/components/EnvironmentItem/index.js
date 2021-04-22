import React from 'react';

import { Text } from 'react-native';

import { useTheme } from 'react-native-paper';

import {
    EnvironmentItemContainer,
} from './styles'

const EnvironmentItem = ({ item, active, onPressItem }) => {
    const { colors } = useTheme();

    return (
        <EnvironmentItemContainer
            onPress={() => onPressItem(item)}
            activeOpacoty={0.8}
            style={{
                backgroundColor: active
                    ? colors.green_light
                    : colors.shape
            }}
        >
            <Text
                style={{
                    color: active
                        ? colors.green_dark
                        : colors.text,
                    fontWeight: active
                        ? 'bold'
                        : 'normal',
                }}
            >
                {item.title}
            </Text>
        </EnvironmentItemContainer>
    )
};

export default EnvironmentItem;