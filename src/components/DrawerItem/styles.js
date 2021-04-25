import styled from 'styled-components';

import { withTheme } from 'react-native-paper';

export const DrawerItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;

export const TitleContainer = withTheme(styled.View`
    width: 100%;
    background-color: ${props => props.selected
            ? props.theme.colors.green_light
            : props.theme.colors.background
        }

    flex-direction: row;
    align-items: center;
`);

export const TitleText = withTheme(styled.Text`
    padding: 15px 0;
    font-size: 18px;
    color: ${props => props.selected 
        ? props.theme.colors.green_dark
        : props.theme.colors.text
    }
`);