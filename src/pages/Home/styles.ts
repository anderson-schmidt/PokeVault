import styled, {css} from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.ImageBackground`
    ${({ theme }) => css`
      width: ${windowWidth}px;
      height: 220px;
      background-color: ${theme.colors.background};
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    font-weight: bold;
    color: ${theme.colors.lightText};
    line-height: 38px
  `}
`;