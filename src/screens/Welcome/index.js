import React from 'react';

import { useNavigation } from '@react-navigation/core';

import {
    Button,
} from 'react-native-paper';

import {
    WelcomeContainer,
    MainTitle,
    SubTitle,
    MainImage,
} from './styles';

import mainImage from '../../assets/watering.png';

const Welcome = () => {
    const navigation = useNavigation();

    const handleForwardNavigation = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <WelcomeContainer>
            <MainTitle>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </MainTitle>

            <MainImage
                source={mainImage}
                resizeMode="contain"
            />

            <SubTitle>
                Não esqueça mais de regar suas plantas.
                Nós vamos ajudar você.
            </SubTitle>

            <Button
                icon="arrow-right"
                mode="contained"
                dark
                onPress={() => handleForwardNavigation('LogOn')}
            >
                Avançar
            </Button>
        </WelcomeContainer>
    )
};

export default Welcome;