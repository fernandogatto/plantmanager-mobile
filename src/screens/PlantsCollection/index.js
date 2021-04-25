import React, { useEffect, useState } from 'react';

import { Alert, FlatList, View } from 'react-native';

import {
    ActivityIndicator,
    IconButton,
    useTheme,
} from 'react-native-paper';

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

import CustomDialog from '../../components/CustomDialog';

import waterdrop from '../../assets/waterdrop.png';

import api from '../../common/services/api';

const PlantsCollection = ({ navigation }) => {
    const { colors } = useTheme();

    const [isLoadingPlants, setIsLoadingPlants] = useState(true);
    
    const [hasErrorPlants, setHasErrorPlants] = useState(false);
    
    const [plants, setPlants] = useState([]);

    const [nextWatering, setNextWatering] = useState('');

    const [showNote, setShowNote] = useState(false);

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [plantRemoved, setPlantRemoved] = useState({});

    const [isLoadingRemove, setIsLoadingRemove] = useState(false);

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

    const handlePlantNavigation = (item) => {
        navigation.navigate('ViewPlant', {
            plant: item.plant,
            isUpdate: true,
            collection: item,
        });
    }

    const handleConfirmDelete = (item) => {
        setIsDialogOpen(true);

        setPlantRemoved(item);
    }

    const handleDelete = async () => {
        try {
            setIsDialogOpen(false);

            setIsLoadingRemove(true);

            await api.delete(`/plants_collection/${plantRemoved.id}`);

            setIsLoadingRemove(false);

            const filteredPlants = plants.filter(item => item.id !== plantRemoved.id);

            setPlants(filteredPlants);
        } catch(err) {
            console.log('handleDelete', err);

            Alert.alert('Erro ao deletar planta.');

            setIsLoadingRemove(false);
        }
    }

    return (
        <>
            <CustomDialog
                isVisible={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Remover"
                message="Tem certeza que deseja remover esta planta da coleção?"
                handleAction={handleDelete}
            />

            <PlantsCollectionContainer>
                <Header
                    type="collection"
                    navigation={navigation}
                />

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
                                icon="close-circle"
                                size={24}
                                onPress={() => setShowNote(false)}
                                color={colors.blue}
                            />
                        </WaterNotationContainer>
                    )}

                    <View style={{ flexDirection: 'row' }}>
                        <NextWateringText>
                            Próximas regas
                        </NextWateringText>

                        {isLoadingRemove && (
                            <ActivityIndicator style={{ marginLeft: 15 }} />
                        )}
                    </View>

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
                                    onRemoveItem={(element) => handleConfirmDelete(element)}
                                />
                            )}
                        />
                    )}

                    <LoadingCard
                        isLoading={isLoadingPlants}
                        hasError={hasErrorPlants}
                        onPressItem={getPlantsCollection}
                        type="collection"
                        count={2}
                        displayFormat="column"
                    />
                </MyCollectionContainer>
            </PlantsCollectionContainer>
        </>
    )
}

export default PlantsCollection;