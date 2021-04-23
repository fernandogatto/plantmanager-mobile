import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';

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

import LoadingCard from '../../components/LoadingCard';

import waterdrop from '../../assets/waterdrop.png';

import api from '../../common/services/api';

const PlantsCollection = () => {
    const [isLoadingPlants, setIsLoadingPlants] = useState(false);
    
    const [hasErrorPlants, setHasErrorPlants] = useState(false);
    
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        getPlantsCollection();
    }, []);

    const getPlantsCollection = async () => {
        try {
            setIsLoadingPlants(true);
            
            const response = await api.get('/plants_collection');
            
            setIsLoadingPlants(false);

            setHasErrorPlants(false);

            setPlants(response);
        } catch(err) {
            console.log('getPlantsCollection', err);

            setIsLoadingPlants(false);

            setHasErrorPlants(true);
        }
    }

    return (
        <PlantsCollectionContainer>
            <Header type="collection" />

            <MyCollectionContainer>
                <WaterNotationContainer>
                    <WaterNotationImage
                        source={waterdrop}
                    />

                    <WaterNotationText>
                        Descrição
                    </WaterNotationText>
                </WaterNotationContainer>
            
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

                {!isLoadingPlants && !hasErrorPlants && plants && plants.length > 0 && plants.map(item => (
                    <></>
                ))}

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