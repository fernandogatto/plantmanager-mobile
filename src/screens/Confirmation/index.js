import React from 'react';

import { useNavigation } from '@react-navigation/core';

import {
    Button,
    IconButton,
} from 'react-native-paper';

import {
    ConfirmationContainer,
    ContentContainer,
    Emoji,
    ConfirmationTitle,
    ConfirmationDescription,
} from './styles';

const Confirmation = () => {
    const navigation = useNavigation();

    const handleGoBackNavigation = (screen) => {
        navigation.navigate(screen);
    }
    
    const handleForwardNavigation = (screen) => {
        navigation.navigate(screen);
    }
    
    return (
        <ConfirmationContainer>
            <IconButton
                icon="arrow-left"
                size={24}
                onPress={() => handleGoBackNavigation('LogOn')}
            />

            <ContentContainer>
                <Emoji>
                    🌱
                </Emoji>

                <ConfirmationTitle>
                    Ponto
                </ConfirmationTitle>

                <ConfirmationDescription>
                    Agora vamos começar a cuidar das suas plantas com muito cuidado.
                </ConfirmationDescription>

                <Button
                    icon="arrow-collapse-right"
                    mode="contained"
                    dark
                    onPress={() => handleForwardNavigation('Dashboard')}
                >
                    Começar
                </Button>
            </ContentContainer>
        </ConfirmationContainer>
    )
};

export default Confirmation;