import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const PlantItemContainer = withTheme(styled.TouchableOpacity`
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    padding: 15px 0;
    margin: 0 15px 15px;
    border-radius: ${props => props.theme.roundness * 2}px;
    background-color: ${props => props.theme.colors.shape};
`);

export const ItemTitle = withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    margin-top: 8px;
`);