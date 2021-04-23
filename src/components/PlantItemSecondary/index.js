import React from 'react';

import { SvgFromUri } from 'react-native-svg';

import {
    PlantsCollectionContainer,
    ItemTitleContainer,
    ItemTitle,
    TimeWateringContainer,
    TimeMessage,
    TimeText,
} from './styles';

const PlantItemSecondary = ({ item, onPressItem }) => {
    return (
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
    )
}

export default PlantItemSecondary;