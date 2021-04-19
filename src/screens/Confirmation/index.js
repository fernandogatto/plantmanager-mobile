import React from 'react';

import {
    Button,
} from 'react-native-paper';

import {
    ConfirmationContainer,
    ConfirmationTitle,
    ConfirmationDescription,
} from './styles';

const Confirmation = () => {
    return (
        <ConfirmationContainer>
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
                onPress={() => {}}
            >
                Começar
            </Button>
        </ConfirmationContainer>
    )
};

export default Confirmation;