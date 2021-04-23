import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const PlantsCollectionContainer = withTheme(styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.shape};
`);

export const MyCollectionContainer = withTheme(styled.ScrollView`
    background-color: ${props => props.theme.colors.background};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 32px 15px 20px;
`);

export const WaterNotationContainer = withTheme(styled.View`
    flex-direction: row;
    align-items: center;

    background-color: ${props => props.theme.colors.blue_light};
    border-radius: 20px;
    padding: 10px;
`);

export const WaterNotationImage = styled.Image`
    height: 56px;
    width: 56px;
    margin-right: 10px;
`;

export const WaterNotationText = withTheme(styled.Text`
    color: ${props => props.theme.colors.blue};
    font-size: 16px;
    max-width: 200px;
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

export const NextWateringText =  withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 26px;
    font-weight: bold;
    margin: 16px 0;
`);
