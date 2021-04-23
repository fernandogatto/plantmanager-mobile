import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';

import { ActivityIndicator, IconButton, useTheme } from 'react-native-paper';

import { useNavigation } from '@react-navigation/core';

import moment from 'moment';

import {
    PlantsCollectionContainer,
    MyCollectionContainer,
    WaterNotationContainer,
    WaterNotationImage,
    WaterNotationText,
    EmojiContainer,
    NotFoundMessage,
    NextWateringText,
} from './styles';

import Header from '../../components/Header';

import PlantItemSecondary from '../../components/PlantItemSecondary';

import LoadingCard from '../../components/LoadingCard';

import waterdrop from '../../assets/waterdrop.png';

import api from '../../common/services/api';

const PlantsCollection = () => {
    const navigation = useNavigation();

    const { colors } = useTheme();

    const [isLoadingPlants, setIsLoadingPlants] = useState(false);
    
    const [hasErrorPlants, setHasErrorPlants] = useState(false);
    
    const [plants, setPlants] = useState([]);

    const [nextWatering, setNextWatering] = useState('');

    const [showNote, setShowNote] = useState(false);

    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const [isLoadedAllPlants, setIsLoadedAllPlants] = useState(false);
    
    const [page, setPage] = useState(1);

    useEffect(() => {
        getPlantsCollection();
    }, []);

    const getPlantsCollection = async () => {
        try {
            setIsLoadingPlants(true);
            
            const { data } = await api.get('/plants_collection');
            
            setIsLoadingPlants(false);

            setHasErrorPlants(false);

            const currentDate = new moment(Date()).format('YYYY-MM-DD');
            
            const currentDateTime = new moment(Date())
                .format('YYYY-MM-DD HH:mm');

            const _plants = data.sort((item) => {
                const firstDateTime = currentDate
                    .concat(' ' + item.date_time_notification);
                
                return moment.utc(moment(currentDateTime).diff(firstDateTime));
            });

            setPlants(_plants);

            if(_plants.length > 0) {
                const firstDateTime = currentDate
                    .concat(' ' + _plants[0].date_time_notification);
    
                const nextTime = moment
                    .utc(moment(firstDateTime).diff(currentDateTime))
                    .format('HH:mm');
    
                setNextWatering(nextTime);
    
                setShowNote(true);
            }
        } catch(err) {
            console.log('getPlantsCollection', err);

            setIsLoadingPlants(false);

            setHasErrorPlants(true);
        }
    }

    const handleGetMorePlants = (distance) => {
        if(distance < 1) return;

        setIsLoadingPage(true);

        setPage(page + 1);
    }

    const handlePlantNavigation = (item) => {
        navigation.navigate('ViewPlant', { item });
    }

    return (
        <PlantsCollectionContainer>
            <Header type="collection" />

            <MyCollectionContainer>
                {!isLoadingPlants && !hasErrorPlants && plants && plants.length > 0 && showNote && (
                    <WaterNotationContainer>
                        <WaterNotationImage
                            source={waterdrop}
                        />

                        <WaterNotationText>
                            Regue sua {plants[0].plant.name} em {nextWatering}.
                        </WaterNotationText>

                        <IconButton
                            icon="close-circle-outline"
                            size={24}
                            onPress={() => setShowNote(false)}
                            color={colors.blue}
                        />
                    </WaterNotationContainer>
                )}
            
                <NextWateringText>
                    Próximas regas
                </NextWateringText>

                {!isLoadingPlants && !hasErrorPlants && plants && plants.length === 0 && (
                    <>
                        <EmojiContainer>
                            👀
                        </EmojiContainer>
                        
                        <NotFoundMessage>
                            Não encontrado
                        </NotFoundMessage>
                    </>
                )}

                {!isLoadingPlants && !hasErrorPlants && plants && plants.length > 0 && (
                    <FlatList
                        data={plants}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <PlantItemSecondary
                                item={item}
                                onPressItem={(element) => handlePlantNavigation(element)}
                            />
                        )}
                        // onEndReachedThreshold={0.1}
                        // onEndReached={({ distance }) => (
                        //     handleGetMorePlants(distance)
                        // )}
                        // ListFooterComponent={
                        //     !isLoadedAllPlants && isLoadingPage
                        //         ? <ActivityIndicator />
                        //         : <></>
                        // }
                    />
                )}

                <LoadingCard
                    isLoading={isLoadingPlants}
                    hasError={hasErrorPlants}
                    onPressItem={getPlantsCollection}
                    type="collection"
                    count={2}
                    displayFormat="collumn"
                />
            </MyCollectionContainer>
        </PlantsCollectionContainer>
    )
}

export default PlantsCollection;