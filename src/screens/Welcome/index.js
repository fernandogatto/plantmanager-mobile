import React from 'react';

import { Text } from 'react-native';

import {
    WelcomeContainer,
    MainTitle,
    SubTitle,
    MainImage,
    MainButton,
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
            
            <MainButton>
                <Text>
                    !
                </Text>
            </MainButton>
        </WelcomeContainer>
    )
};

export default Welcome;