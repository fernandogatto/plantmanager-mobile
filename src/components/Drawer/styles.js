import styled from 'styled-components';

import { withTheme } from 'react-native-paper';

export const DrawerContainer = withTheme(styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
`);

export const CompanyContainer = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: auto;
`;

export const CompanyImage = styled.Image`
    height: 50px;
    width: 50px;
    margin: 0 15px;
`;

export const CompanyText = withTheme(styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 16px;
`);