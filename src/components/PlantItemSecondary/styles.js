import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const PlantsCollectionContainer = withTheme(styled.TouchableOpacity`
    background-color: ${props => props.theme.colors.shape};
    border-radius: ${props => props.theme.roundness * 2}px;
    margin-bottom: 15px;
    padding: 15px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`);

export const ItemTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ItemTitle = withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    font-weight: bold;
    margin-left: 6px;
`);

export const TimeWateringContainer = styled.View`
    align-items: flex-end;
`;

export const TimeMessage = withTheme(styled.Text`
    color: ${props => props.theme.colors.body_light};
    font-size: 14px;
`);

export const TimeText = withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 16px;
`);