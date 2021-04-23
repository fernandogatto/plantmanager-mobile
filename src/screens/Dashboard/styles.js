import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const DashboardContainer = withTheme(styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: ${props => props.theme.colors.green_light};
`);

export const EnvironmentContainer = withTheme(styled.View`
    padding: 32px 15px 20px;
    border-top-left-radius: ${props => props.theme.roundness * 2}px;
    border-top-right-radius: ${props => props.theme.roundness * 2}px;
    background-color: ${props => props.theme.colors.background};
`);

export const EnvironmentDescription = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
`);

export const EnvironmentsView = withTheme(styled.View`
    background-color: ${props => props.theme.colors.background};
`);

export const PlantsContainer = withTheme(styled.View`
    flex: 1;
    padding: 32px 0 15px;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
`);

export const EmojiContainer = styled.Text`
    font-size: 32px;
    text-align: center;
`;

export const NotFoundMessage = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    text-align: center;
`);