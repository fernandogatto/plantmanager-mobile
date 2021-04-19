import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const CategoryItemContainer = withTheme(styled.TouchableOpacity`
    padding: 15px;
    margin-right: 6px;
    border-radius: ${props => props.theme.roundness}px;
`);
