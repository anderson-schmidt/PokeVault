import styled, {css} from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    ${({theme}: {theme: DefaultTheme}) => css`
    flex: 1;
    background-color: ${theme.colors.background};
`}`;