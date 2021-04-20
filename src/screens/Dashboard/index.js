import React, { useEffect, useState } from 'react';

import { FlatList, View } from 'react-native';

import { Button } from 'react-native-paper';

import {
    DashboardContainer,
    HeaderContainer,
    WelcomeMessage,
    UserName,
    CategoryContainer,
    CategoryDescription,
} from './styles';

import CategoryItem from '../../components/CategoryItem';

const Dashboard = () => {
    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState({});

    useEffect(() => {
        getCategories();
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

    const handleSelectCategory = (item) => {
        setSelectedCategory(item);
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
            
            <CategoryContainer>
                <Button
                    icon="arrow-right"
                    mode="contained"
                    dark
                    onPress={() => {}}
                >
                    Avançar
                </Button>
            </CategoryContainer>
        </DashboardContainer>
    )
};

export default Dashboard;