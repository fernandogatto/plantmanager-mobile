import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

import { Dimensions } from 'react-native';

export const WelcomeContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 32px 15px 20px;
`;

export const MainTitle = withTheme(styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.text}
`);

export const SubTitle = withTheme(styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.colors.text}
`);

export const MainImage = styled.Image`
    height: ${Dimensions.get('window').width * 0.7}px;
`;