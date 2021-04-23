import styled from 'styled-components/native';

import { withTheme } from 'react-native-paper';

export const LogOnContainer = styled.SafeAreaView`
    flex: 1;
    padding: 32px 15px 20px;
    width: 100%;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Emoji = styled.Text`
    font-size: 48px;
    margin-bottom: 8px;
`;

export const LogOnTitle = withTheme(styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.text}
    margin-bottom: 32px;
`);

export const FormContainer = styled.View`
    width: 100%;
`;