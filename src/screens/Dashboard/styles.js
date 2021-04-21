import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const DashboardContainer = styled.SafeAreaView`
    flex: 1;
    width: 100%;
`;

export const EnvironmentContainer = styled.View`
    padding: 32px 15px 20px;
`;

export const EnvironmentDescription = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
`);

export const PlantsContainer = styled.View`
    flex: 1;
    padding: 32px 0 40px;
    width: 100%;
`;

export const EmojiContainer = styled.Text`
    font-size: 32px;
    text-align: center;
`;

export const NotFoundMessage = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    text-align: center;
`);