import styled from 'styled-components/native';

export const WelcomeContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`;

export const MainTitle = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.heading};
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${props => props.theme.colors.heading};
`;

export const MainImage = styled.Image`
    height: 284px;
`;

export const MainButton = styled.TouchableOpacity`
    background-color: #32B768;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    height: 56px;
    width: 56px;
    color: #FFF;
`;