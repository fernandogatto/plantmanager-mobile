import React, { useState } from 'react';

import {
    TextInput,
    Button,
} from 'react-native-paper';

import {
    LogOnContainer,
    LogOnTitle,
    FormContainer,
} from './styles';

const LogOn = () => {
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

    const handleSubmit = () => {
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
            
            setIsSubmiting(false);
        } catch(err) {
            console.log('handleSubmit', err);

            setIsSubmiting(false);
        }
    }

    return (
        <LogOnContainer>
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
                    style={{
                        marginBottom: 16,
                    }}
                />

                <Button
                    icon="arrow-right"
                    mode="contained"
                    dark
                    onPress={handleSubmit}
                    disabled={textInputData.usuario === '' || isSubmiting}
                    loading={isSubmiting}
                >
                    Confirmar
                </Button>
            </FormContainer>
        </LogOnContainer>
    )
};

export default LogOn;