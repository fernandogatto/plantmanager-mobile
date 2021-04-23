import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const EnvironmentItemContainer = withTheme(styled.TouchableOpacity`
    padding: 15px;
    margin-right: 30px;
    border-radius: ${props => props.theme.roundness * 2}px;
`);
