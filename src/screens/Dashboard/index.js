import React, { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';

import {
    DashboardContainer,
    HeaderContainer,
    WelcomeMessage,
    UserName,
    CategoryContainer,
    CategoryDescription,
    PlantsContainer,
} from './styles';

import CategoryItem from '../../components/CategoryItem';

import PlantItem from '../../components/PlantItem';

const Dashboard = () => {
    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState({});

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        getCategories();

        getPlanties();
    }, []);

    const getCategories = () => {
        try {
            const _categories = [
                {
                    id: 1,
                    nome: 'Sala',
                },
                {
                    id: 2,
                    nome: 'Quarto',
                },
                {
                    id: 3,
                    nome: 'Banheiro',
                },
                {
                    id: 4,
                    nome: 'Cozinha',
                },
                {
                    id: 5,
                    nome: 'Varanda',
                }
            ];

            setCategories(_categories);

            setSelectedCategory(_categories[0]);
        } catch(err) {
            console.log('getCategories', err);
        }
    }

    const getPlanties = () => {
        try {
            const _plants = [
                {
                    id: 1,
                    nome: 'Imbé',
                },
                {
                    id: 2,
                    nome: 'Peperonia',
                },
                {
                    id: 3,
                    nome: 'Aningapara',
                },
                {
                    id: 4,
                    nome: 'Yucca',
                },
                {
                    id: 5,
                    nome: 'Filodendro',
                }
            ];

            setPlants(_plants);
        } catch(err) {
            console.log('getPlanties', err);
        }
    }

    const handleSelectCategory = (item) => {
        setSelectedCategory(item);
    }

    const handlePlantNavigation = (item) => {

    }

    const createRowsPlants = (data, columns) => {
        const rows = Math.floor(data.length / columns);
        
        let lastRowElements = data.length - rows * columns;
      
        while (lastRowElements !== columns) {
            data.push({
                id: `empty-${lastRowElements}`,
                nome: `empty-${lastRowElements}`,
                empty: true,
            });

            lastRowElements += 1;
        }
      
        return data;
    }

    return (
        <DashboardContainer>
            <HeaderContainer>
                <WelcomeMessage>
                    Olá,
                </WelcomeMessage>

                <UserName>
                    Fernando
                </UserName>
            </HeaderContainer>

            <CategoryContainer>
                <CategoryDescription>
                    Em qual ambiente {'\n'}
                    você quer colocar sua planta?
                </CategoryDescription>
            </CategoryContainer>

            <View>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <CategoryItem
                            item={item}
                            selectedItem={selectedCategory}
                            onPressItem={(element) => handleSelectCategory(element)}
                        />
                    )}
                />
            </View>
            
            <PlantsContainer>
                <FlatList
                    data={createRowsPlants(plants, 2)}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <PlantItem
                            item={item}
                            onPressItem={(element) => handlePlantNavigation(element)}
                        />
                    )}
                />
            </PlantsContainer>
        </DashboardContainer>
    )
};

export default Dashboard;