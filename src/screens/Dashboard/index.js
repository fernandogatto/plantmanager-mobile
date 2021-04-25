import React, { useEffect, useState } from 'react';

import {
    FlatList,
} from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import {
    DashboardContainer,
    EnvironmentContainer,
    EnvironmentDescription,
    EnvironmentsView,
    PlantsContainer,
    EmojiContainer,
    NotFoundMessage,
} from './styles';

import Header from '../../components/Header';

import EnvironmentItem from '../../components/EnvironmentItem';

import PlantItemPrimary from '../../components/PlantItemPrimary';

import LoadingCard from '../../components/LoadingCard';

import api from '../../common/services/api';

const Dashboard = ({ navigation }) => {
    const [isLoadingEnvironments, setIsLoadingEnvironments] = useState(true);

    const [hasErrorEnvironments, setHasErrorEnvironments] = useState(false);

    const [environments, setEnvironments] = useState([]);

    const [selectedEnvironment, setSelectedEnvironment] = useState({});

    const [isLoadingPlants, setIsLoadingPlants] = useState(true);

    const [hasErrorPlants, setHasErrorPlants] = useState(false);

    const [plants, setPlants] = useState([]);

    const [filteredPlants, setFilteredPlants] = useState([]);

    const [isLoadingPage, setIsLoadingPage] = useState(false);

    const [isLoadedAllPlants, setIsLoadedAllPlants] = useState(false);
    
    const [page, setPage] = useState(1);

    useEffect(() => {
        getEnvironments();
    }, []);

    const getEnvironments = async () => {
        try {
            setIsLoadingEnvironments(true);

            const { data } = await api.get('plants_environments?_sort=title&_order=asc');

            setIsLoadingEnvironments(false);

            setHasErrorEnvironments(false);

            const _data = [
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ];

            setEnvironments(_data);

            setSelectedEnvironment(_data[0]);
        } catch(err) {
            console.log('getEnvironments', err);

            setIsLoadingEnvironments(false);

            setHasErrorEnvironments(true);
        }
    }

    useEffect(() => {
        if(!isLoadedAllPlants) {
            getPlants();
        }
    }, [page]);

    const getPlants = async () => {
        try {
            if(page === 1) { // when page is loaded
                setIsLoadingPlants(true);

                const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

                setIsLoadingPlants(false);

                setPlants(data);

                setFilteredPlants(data);

                if(data.length < 8) {
                    setIsLoadedAllPlants(true);
                }
            } else { // when scroll is done 
                const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

                setPlants(oldItem => [...oldItem, ...data]);
                
                setFilteredPlants(oldItem => [...oldItem, ...data]);

                if(data.length < 8) {
                    setIsLoadedAllPlants(true);
                }
            }

            setHasErrorPlants(false);

            setIsLoadingPage(false);
        } catch(err) {
            console.log('getPlants', err);

            setIsLoadingPlants(false);

            setHasErrorPlants(true);

            setIsLoadingPage(false);
        }
    }

    const handleGetMorePlants = (distance) => {
        if(distance < 1) return;

        setIsLoadingPage(true);

        setPage(page + 1);
    }

    const handleSelectEnvironment = (item) => {
        setSelectedEnvironment(item);

        if(item.key === 'all') {
            setFilteredPlants(plants);
        } else {
            const _filteredPlants = plants
                .filter(value => value.environments.includes(item.key));
            
            setFilteredPlants(_filteredPlants);
        }
    }

    const formatData = (data, columns) => {
        const rows = Math.floor(data.length / columns);
        
        let lastRowElements = data.length - rows * columns;
      
        while (lastRowElements !== columns && lastRowElements !== 0) {
            data.push({
                id: `empty-${lastRowElements}`,
                empty: true,
            });

            lastRowElements += 1;
        }
      
        return data;
    }

    const handlePlantNavigation = (item) => {
        navigation.navigate('ViewPlant', { plant: item, isUpdate: false });
    }

    return (
        <DashboardContainer>
            <Header
                type="dashboard"
                navigation={navigation}
            />

            <EnvironmentContainer>
                <EnvironmentDescription>
                    Em qual ambiente {'\n'}
                    você quer colocar sua planta?
                </EnvironmentDescription>
            </EnvironmentContainer>

            <EnvironmentsView>
                {!isLoadingEnvironments && !hasErrorEnvironments && environments && environments.length > 0 && (
                    <FlatList
                        data={environments}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.key}`}
                        renderItem={({ item }) => (
                            <EnvironmentItem
                                item={item}
                                active={item.key === selectedEnvironment.key}
                                onPressItem={(element) => handleSelectEnvironment(element)}
                            />
                        )}
                        contentContainerStyle={{
                            marginHorizontal: 15,
                        }}
                    />
                )}

                <LoadingCard
                    isLoading={isLoadingEnvironments}
                    hasError={hasErrorEnvironments}
                    onPressItem={getEnvironments}
                    type="environment"
                    count={3}
                    displayFormat="row"
                />
            </EnvironmentsView>
            
            <PlantsContainer>
                {!isLoadingPlants && !hasErrorPlants && filteredPlants && filteredPlants.length === 0 && (
                    <>
                        <EmojiContainer>
                            👀
                        </EmojiContainer>
                        
                        <NotFoundMessage>
                            Não encontrado
                        </NotFoundMessage>
                    </>
                )}

                {!isLoadingPlants && !hasErrorPlants && filteredPlants && filteredPlants.length > 0 && (
                    <FlatList
                        data={formatData(filteredPlants, 2)}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => (
                            <PlantItemPrimary
                                item={item}
                                onPressItem={(element) => handlePlantNavigation(element)}
                            />
                        )}
                        onEndReachedThreshold={0.1}
                        onEndReached={({ distance }) => (
                            handleGetMorePlants(distance)
                        )}
                        ListFooterComponent={
                            !isLoadedAllPlants && isLoadingPage
                                ? <ActivityIndicator />
                                : <></>
                        }
                    />
                )}

                <LoadingCard
                    isLoading={isLoadingPlants}
                    hasError={hasErrorPlants}
                    onPressItem={getPlants}
                    type="plants"
                    count={2}
                    displayFormat="grid"
                />
            </PlantsContainer>
        </DashboardContainer>
    )
};

export default Dashboard;