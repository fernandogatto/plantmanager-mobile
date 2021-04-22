import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const PlantViewContainer = withTheme(styled.View`
    flex: 1;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.shape};
`)

export const HeaderPlant = withTheme(styled.View`
    flex: 1;
    padding: 32px 15px;
    background-color: ${props => props.theme.colors.shape};
`);

export const HeaderPlantContent = styled.View`
    align-items: center;
    justify-content: flex-start;
`;

export const PlantName = withTheme(styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
    margin: 16px 0;
`);

export const PlantDescription = withTheme(styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    text-align: center;
`);

export const TimeContainer = withTheme(styled.View`
    padding: 30px 15px ${getBottomSpace() || 20}px;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`);

export const WaterNotationContainer = withTheme(styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.blue_light};
    border-radius: 20px;
    padding: 10px;
    position: relative;
    bottom: 60px;
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

export const FormContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    align-items: center;
`;

export const TimeView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;