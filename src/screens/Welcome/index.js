import React from 'react';

import { Text } from 'react-native';

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
    return (
        <WelcomeContainer>
            <MainTitle>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </MainTitle>

            <MainImage source={mainImage} />

            <SubTitle>
                Não esqueça mais de regar suas plantas.
                Nós vamos ajudar você.
            </SubTitle>

            <Button
                icon="arrow-right"
                mode="contained"
                dark
                onPress={() => {}}
            >
                Avançar
            </Button>
        </WelcomeContainer>
    )
};

export default Welcome;