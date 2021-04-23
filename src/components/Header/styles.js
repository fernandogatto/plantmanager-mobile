import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const HeaderContainer = withTheme(styled.View`
    padding: 32px 15px 20px;
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`);

export const PrimaryMessage = withTheme(styled.Text`
    font-size: 32px;
    font-weight: 300;
    color: ${props => props.theme.colors.text};
`);

export const SecondaryMessage = withTheme(styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
`);

export const UserImage = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;