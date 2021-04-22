import React, { useState } from 'react';

import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import {
    TextInput,
    Button,
    IconButton,
} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    LogOnContainer,
    KeyboardAvoidingView,
    Emoji,
    LogOnTitle,
    FormContainer,
} from './styles';

import USER_KEY from '../../common/constants/USER_KEY';

const LogOn = () => {
    const navigation = useNavigation();

    const [textInputData, setTextInputData] = useState({
        usuario: '',
    });

    const [errorTextInputData, setErrorTextInputData] = useState({
        usuario: false,
    });

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleTextInputChange = (value, name) => {
        setTextInputData({...textInputData, [name]: value.trimLeft()});
    }

    const handleGoBackNavigation = () => {
        navigation.goBack();
    }

    const handleSubmit = async () => {
        try {
            const {
                usuario,
            } = textInputData;

            setErrorTextInputData({
                usuario: usuario === '' ? true : false,
            });

            if(usuario === '') {
                return;
            }
        
            setIsSubmiting(true);

            await AsyncStorage.setItem(USER_KEY, usuario);

            setIsSubmiting(false);

            navigation.navigate('Confirmation');
        } catch(err) {
            console.log('handleSubmit', err);

            setIsSubmiting(false);
        }
    }

    return (
        <LogOnContainer>
            <IconButton
                icon="arrow-left"
                size={24}
                onPress={handleGoBackNavigation}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {textInputData.usuario === ''
                    ? (
                        <Emoji>
                            😃
                        </Emoji>
                    ) : (
                        <Emoji>
                            😄
                        </Emoji>
                    )
                }

                <LogOnTitle>
                    Como podemos {'\n'}
                    chamar você?
                </LogOnTitle>

                <FormContainer>
                    <TextInput
                        error={errorTextInputData.usuario}
                        mode="outlined"
                        label="Usuário"
                        value={textInputData.usuario}
                        onChangeText={value => handleTextInputChange(value, 'usuario')}
                    />

                    <Button
                        icon="arrow-right"
                        mode="contained"
                        dark
                        onPress={handleSubmit}
                        disabled={textInputData.usuario === '' || isSubmiting}
                        loading={isSubmiting}
                        style={{
                            marginTop: 16,
                            width: "100%",
                        }}
                    >
                        Confirmar
                    </Button>
                </FormContainer>
            </KeyboardAvoidingView>
        </LogOnContainer>
    )
};

export default LogOn;