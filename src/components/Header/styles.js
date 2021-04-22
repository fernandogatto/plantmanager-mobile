import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const HeaderContainer = withTheme(styled.View`
    background-color: ${props => props.theme.colors.green_light};
    padding: 32px 15px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`);

export const WelcomeMessage = withTheme(styled.Text`
    font-size: 32px;
    font-weight: 300;
    color: ${props => props.theme.colors.text};
`);

export const UserName = withTheme(styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
`);

export const UserImage = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;