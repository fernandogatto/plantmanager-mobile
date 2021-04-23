import styled from 'styled-components';

import { withTheme } from 'react-native-paper';

export const DrawerItemContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
`;

export const TitleContainer = styled.View`
    width: 100%;
`;

export const TitleText = withTheme(styled.Text`
    padding: 15px;
    font-size: 18px;
    color: ${props => props.selected 
                ? props.theme.colors.green_dark
                : props.theme.colors.text
            }
    background-color: ${props => props.selected
                ? props.theme.colors.green_light
                : props.theme.colors.background
            }
`);