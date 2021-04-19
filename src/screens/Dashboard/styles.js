import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const DashboardContainer = styled.SafeAreaView`
    flex: 1;
    width: 100%;
`;

export const HeaderContainer = withTheme(styled.View`
    background-color: ${props => props.theme.colors.green_light};
    padding: 32px 15px 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
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

export const CategoryContainer = styled.View`
    padding: 32px 15px 20px;
`;

export const CategoryDescription = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
`);