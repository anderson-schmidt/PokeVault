import { DefaultTheme } from "styled-components/dist/types";
import styled, {css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({theme}: {theme: DefaultTheme}) => css`
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.type.grass};

    border-radius: 20px;
    justify-content: center;
    align-items: center;
`}`;

export const Title = styled.Text`
    ${({theme}: {theme: DefaultTheme}) => css`
     font-size: 14px;
     color: ${theme.colors.textWhite};
     font-weight: bold;
    `}`;