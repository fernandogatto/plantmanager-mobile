import React, { useEffect } from 'react';

import { Alert } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { LogOffContainer } from './styles';

import USER_KEY from '../../common/constants/USER_KEY'

const LogOff = () => {
    const navigation = useNavigation();

    useEffect(() => {
        getLogOff();
    }, []);

    const getLogOff = async () => {
        try {
            await AsyncStorage.removeItem(USER_KEY);

            navigation.navigate('Welcome');
        } catch(err) {
            Alert.alert('Erro ao sair da aplicação.');

            console.log('handleLogOff', err);
        }
    }

    return (
        <LogOffContainer>
            <ActivityIndicator />
        </LogOffContainer>
    )
}

export default LogOff;