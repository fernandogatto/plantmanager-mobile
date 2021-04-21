import React from 'react';

import { View } from 'react-native';

import {
    HeaderContainer,
    WelcomeMessage,
    UserName,
    UserImage,
} from './styles';

import userImg from '../../assets/user.png';

const Header = () => {
    return (
        <HeaderContainer>
            <View>
                <WelcomeMessage>
                    Olá, 👋
                </WelcomeMessage>

                <UserName>
                    Fernando
                </UserName>
            </View>

            <UserImage
                source={userImg}
                resizeMode="cover"
            />
        </HeaderContainer>
    )
}

export default Header;