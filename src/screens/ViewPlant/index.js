import React, { useEffect, useState } from 'react';

import { Alert, Platform } from 'react-native';

import {
    Button,
    IconButton,
    Text,
} from 'react-native-paper';

import { useNavigation, useRoute } from '@react-navigation/core';

import DateTimePicker from '@react-native-community/datetimepicker';

import { SvgFromUri } from 'react-native-svg';

import moment from 'moment';

import {
    PlantViewContainer,
    HeaderPlant,
    HeaderPlantContent,
    PlantName,
    PlantDescription,
    TimeContainer,
    WaterNotationContainer,
    WaterNotationImage,
    WaterNotationText,
    FormContainer,
    TimeView,
} from './styles';

import waterdrop from '../../assets/waterdrop.png';

import api from '../../common/services/api';

const ViewPlant = () => {
    const navigation = useNavigation();

    const route = useRoute();

    const { item } = route.params;

    const [favoritePlants, setFavoritePlants] = useState([]);

    const [dateTime, setDateTime] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    const [isSubmiting, setIsSubmiting] = useState(false);

    useEffect(() => {
        getFavoritePlants();
    }, []);

    const getFavoritePlants = async () => {
        try {
            const response = await api.get('/plants_collection');

            setFavoritePlants(response);
        } catch(err) {
            console.log('getFavoritePlants', err);
        }
    }

    const handleGoBackNavigation = () => {
        navigation.goBack();
    }

    const handleDateTimeChange = (event, selectedDateTime) => {
        if(Platform.OS === 'android') {
            setShowDatePicker(!showDatePicker);
        }
        
        if(selectedDateTime && moment(selectedDateTime).isBefore(new Date())) {
            Alert.alert('Data inválida, escolha uma data futura!');

            return;
        }

        if(selectedDateTime) {
            setDateTime(selectedDateTime);
        }
    }

    const handleSubmit = async () => {
        try {
            const _favoritePlants = favoritePlants.length + 1;

            const data = {
                id: _favoritePlants + _favoritePlants,
                plant: item,
                date_time_notification: moment(dateTime).format('HH:mm'),
            };

            setIsSubmiting(true);

            await api.post('/plants_collection', data);

            setIsSubmiting(false);

            navigation.navigate('Gratefullness');
        } catch(err) {
            Alert.alert('Não foi possível salvar.');

            console.log('handleSubmit', err);

            setIsSubmiting(false);
        }
    }

    return (
        <PlantViewContainer>
            <HeaderPlant>
                <IconButton
                    icon="arrow-left"
                    size={24}
                    onPress={handleGoBackNavigation}
                />

                <HeaderPlantContent>
                    <SvgFromUri
                        uri={item.photo}
                        height={120}
                        width={120}
                    />

                    <PlantName>
                        {item.name}
                    </PlantName>

                    <PlantDescription>
                        {item.about}
                    </PlantDescription>
                </HeaderPlantContent>
            </HeaderPlant>
        
            <TimeContainer>
                <WaterNotationContainer>
                    <WaterNotationImage
                        source={waterdrop}
                    />

                    <WaterNotationText>
                        {item.water_tips}
                    </WaterNotationText>
                </WaterNotationContainer>

                <Text>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <FormContainer>
                    {Platform.OS === 'android' && (
                        <TimeView>
                            <IconButton
                                icon="calendar-clock"
                                size={24}
                                onPress={() => setShowDatePicker(!showDatePicker)}
                                style={{
                                    marginRight: 16,
                                }}
                            />

                            <Text>
                                {moment(dateTime).format('HH:mm')}
                            </Text>
                        </TimeView>
                    )}

                    {showDatePicker && (
                        <DateTimePicker
                            value={dateTime}
                            mode="time"
                            is24Hour
                            display="default"
                            onChange={handleDateTimeChange}
                        />
                    )}

                    <Button
                        icon="arrow-collapse-down"
                        mode="contained"
                        dark
                        onPress={handleSubmit}
                        disabled={isSubmiting}
                        loading={isSubmiting}
                        style={{
                            marginTop: 16,
                            width: "100%",
                        }}
                    >
                        Cadastrar
                    </Button>
                </FormContainer>
            </TimeContainer>
        </PlantViewContainer>
    )
}

export default ViewPlant;