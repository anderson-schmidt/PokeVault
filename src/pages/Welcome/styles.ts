import styled, {css} from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    ${({theme}: {theme: DefaultTheme}) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundGrass};
`}`;

export const Content = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;
`;

export const WrapperAnimation = styled.View`
    ${({theme}: {theme: DefaultTheme}) => css`
    width: 300px;
    height: 300px;
    border-radius: 200px;
    background-color: ${theme.colors.type.grass};
    justify-content: center;
    align-items: center;
`};
`

export const Title = styled.Text`
    ${({theme}: {theme: DefaultTheme}) => css`
        justify-content: center;
        align-items: center;
        font-size: 40px;
        font-weight: bold;
        color: ${theme.colors.textWhite};
        margin-top: 20px;
    `} 
`;

export const Subtitle = styled.Text`
    ${({theme}: {theme: DefaultTheme}) => css`
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        font-size: 18px;
        color: ${theme.colors.textWhite};
    `}    
`;

export const Footer = styled.View`
    ${({theme}: {theme: DefaultTheme}) => css`
    justify-content: center;
    align-items: center;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
    height: 30%;
    background-color: ${theme.colors.background};
    padding: 20px;
`}
`;