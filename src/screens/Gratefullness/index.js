import React from 'react';

import {
    Button,
} from 'react-native-paper';

import {
    GratefullnessContainer,
    GratefullnessTitle,
    GratefullnessDescription,
} from './styles';

const Gratefullness = () => {
    return (
        <GratefullnessContainer>
            <GratefullnessTitle>
                Tudo certo
            </GratefullnessTitle>

            <GratefullnessDescription>
                Fique tranquilo que sempre vamos lembrar de você e das suas plantinhas.
            </GratefullnessDescription>

            <Button
                icon="arrow-right"
                mode="contained"
                dark
                onPress={() => {}}
            >
                Avançar
            </Button>
        </GratefullnessContainer>
    )
};

export default Gratefullness;