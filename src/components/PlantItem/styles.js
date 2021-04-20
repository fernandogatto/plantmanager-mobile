import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const PlantItemContainer = withTheme(styled.TouchableOpacity`
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px 0;
    margin: 0 15px 15px;
    border-radius: ${props => props.theme.roundness}px;
    background-color: ${props => props.theme.colors.shape};
`);

export const PlantItemTransparent = withTheme(styled.View`
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px 0;
    margin: 0 15px 15px;
    border-radius: ${props => props.theme.roundness}px;
    background-color: transparent;
`);

export const ItemTitle = withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    text-align: center;
    font-weight: bold;
`);