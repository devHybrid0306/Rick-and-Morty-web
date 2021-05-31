import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../types/theme';

interface IGlobalStyles {
  theme: ITheme;
}
export const GlobalStyles = createGlobalStyle<IGlobalStyles>`
  * {
    box-sizing: border-box;
    font-family:  ${({ theme }) => theme.font.family};
  }
  html {
    box-sizing: border-box;
  }
  body,
  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  p {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 34px;
    line-height: 44px;
    font-weight: ${({ theme }) => theme.font.weight.semi_bold};
    color:${({ theme }) => theme.color.mainFontColor};
  }
  h2 {
    font-size: 32px;
    line-height:42.66px;
    font-weight: ${({ theme }) => theme.font.weight.semi_bold};
    color:${({ theme }) => theme.color.mainFontColor};
  }
  h3 {
    font-size: 40px;
    line-height: 55px;
    font-weight: ${({ theme }) => theme.font.weight.semi_bold};
    color:${({ theme }) => theme.color.mainFontColor};
  }
  button {
    font-size: 20px;
    line-height: 21.76px;
    font-weight: ${({ theme }) => theme.font.weight.semi_bold};
  }
  .text {
    &-body {
      font-size: 20px;
      line-height: 21px;
      font-weight: ${({ theme }) => theme.font.weight.regular};
      color:${({ theme }) => theme.color.mainFontColor}
    }

    &-body-small {
      font-size: 12px;
      line-height: 16px;
    }
  }
  a {
    color:${({ theme }) => theme.color.primaryColor};
    text-decoration: none;
    font-size: 12px;
    line-height: 16px;
    transition: ${(props) => props.theme.transition.transitionFast};

    &:hover {
      color: ${({ theme }) => theme.color.primaryColor};
      text-decoration: underline;
      transition: ${(props) => props.theme.transition.transitionFast};
    }
  }
`;
