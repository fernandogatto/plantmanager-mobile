import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const GratefullnessContainer = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
`;

export const GratefullnessTitle = withTheme(styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.text}
    margin-bottom: 32px;
`);

export const GratefullnessDescription = withTheme(styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.colors.text}
    margin-bottom: 32px;
`);