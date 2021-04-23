import React from 'react';

import { useNavigation } from '@react-navigation/core';

import {
    Button,
} from 'react-native-paper';

import {
    GratefullnessContainer,
    Emoji,
    GratefullnessTitle,
    GratefullnessDescription,
} from './styles';

const Gratefullness = () => {
    const navigation = useNavigation();

    const handleForwardNavigation = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <GratefullnessContainer>
            <Emoji>
                👍
            </Emoji>

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
                onPress={() => handleForwardNavigation('PlantsCollection')}
            >
                Avançar
            </Button>
        </GratefullnessContainer>
    )
};

export default Gratefullness;