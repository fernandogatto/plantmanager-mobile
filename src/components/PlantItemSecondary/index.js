import React from 'react';

import { Animated } from 'react-native';

import { IconButton, useTheme } from 'react-native-paper';

import { SvgFromUri } from 'react-native-svg';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import {
    PlantsCollectionContainer,
    ItemTitleContainer,
    ItemTitle,
    TimeWateringContainer,
    TimeMessage,
    TimeText,
    RemoveContainer,
} from './styles';

const PlantItemSecondary = ({ item, onPressItem, onRemoveItem }) => {
    const { colors } = useTheme();

    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <RemoveContainer>
                        <IconButton
                            icon="delete"
                            size={24}
                            onPress={() => onRemoveItem(item)}
                            color={colors.red}
                        />
                    </RemoveContainer>
                </Animated.View>
            )}
        >
            <PlantsCollectionContainer
                onPress={() => onPressItem(item)}
                activeOpacoty={0.8}
            >
                <ItemTitleContainer>
                    <SvgFromUri
                        uri={item.plant.photo}
                        height={70}
                        width={70}
                    />

                    <ItemTitle>
                        {item.plant.name}
                    </ItemTitle>
                </ItemTitleContainer>
            
                <TimeWateringContainer>
                    <TimeMessage>
                        Regar às
                    </TimeMessage>

                    <TimeText>
                        {item.date_time_notification}
                    </TimeText>
                </TimeWateringContainer>
            </PlantsCollectionContainer>
        </Swipeable>
    )
}

export default PlantItemSecondary;