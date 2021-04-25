import React, { useEffect, useState } from 'react';

import { Alert, Platform } from 'react-native';

import {
    Button,
    IconButton,
    Text,
} from 'react-native-paper';

import { useRoute } from '@react-navigation/core';

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

const ViewPlant = ({ navigation }) => {
    const route = useRoute();

    const { plant, isUpdate, collection } = route.params;

    const [dateTime, setDateTime] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    const [isSubmiting, setIsSubmiting] = useState(false);

    useEffect(() => {
        if(isUpdate) {
            changeDateTime();
        }
    }, []);

    const changeDateTime = () => {
        const collectionTime = collection.date_time_notification;

        const splitTime = collectionTime.split(':'); // [time, minute]

        const _dateTime = dateTime.setHours(splitTime[0], splitTime[1]);

        setDateTime(new Date(_dateTime));
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
            const data = {
                id: isUpdate
                    ? collection.id
                    : Math.floor(Math.random() * 999999), // random number
                plant,
                date_time_notification: moment(dateTime).format('HH:mm'),
            };

            setIsSubmiting(true);

            isUpdate
                ? await api.put(`/plants_collection/${collection.id}`, data)
                : await api.post('/plants_collection', data);

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
                        uri={plant.photo}
                        height={120}
                        width={120}
                    />

                    <PlantName>
                        {plant.name}
                    </PlantName>

                    <PlantDescription>
                        {plant.about}
                    </PlantDescription>
                </HeaderPlantContent>
            </HeaderPlant>
        
            <TimeContainer>
                <WaterNotationContainer>
                    <WaterNotationImage
                        source={waterdrop}
                    />

                    <WaterNotationText>
                        {plant.water_tips}
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
                        {isUpdate ? 'Atualizar' : 'Cadastrar'}
                    </Button>
                </FormContainer>
            </TimeContainer>
        </PlantViewContainer>
    )
}

export default ViewPlant;