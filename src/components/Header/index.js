import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import { IconButton } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {
    HeaderContainer,
    PrimaryMessage,
    SecondaryMessage,
} from './styles';

import USER_KEY from '../../common/constants/USER_KEY';

const Header = ({ type, navigation }) => {
    const [isLoadingUser, setIsLoadingUser] = useState(false);

    const [userName, setUserName] = useState('');
    
    useEffect(() => {
        if(type === 'dashboard') {
            getUser();
        }
    }, []);

    const getUser = async () => {
        try {
            setIsLoadingUser(true);

            const response = await AsyncStorage.getItem(USER_KEY);

            setIsLoadingUser(false);

            setUserName(response);
        } catch(err) {
            console.log('getUser', err);

            setIsLoadingUser(false);
        }
    }

    const handleOpenDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <HeaderContainer>
            <IconButton
                icon="menu"
                size={24}
                onPress={() => handleOpenDrawer()}
            />

            {type === 'dashboard' && (
                <View>
                    <PrimaryMessage>
                        👋 Olá,
                    </PrimaryMessage>

                    <SecondaryMessage>
                        {isLoadingUser && (
                            <SkeletonPlaceholder>
                                <SkeletonPlaceholder.Item
                                    width={100}
                                    height={32}
                                    borderRadius={4}
                                />
                            </SkeletonPlaceholder>
                        )}

                        {!isLoadingUser && userName !== '' && userName}
                    </SecondaryMessage>
                </View>
            )}

            {type === 'collection' && (
                <View>
                    <PrimaryMessage>
                        Minhas
                    </PrimaryMessage>

                    <SecondaryMessage>
                        Plantas
                    </SecondaryMessage>
                </View>
            )}
        </HeaderContainer>
    )
}

export default Header;