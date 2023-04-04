import { createGlobalStyle } from 'styled-components';

import resetCSS from './reset';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  body {
    background-color: ${(props) => props.theme.colors.light.red.bg};
    color: ${({ theme }) => theme.colors.light.red[900]};
    font-family: ${({ theme }) => theme.fontFamily.sans};
  }
`;

export default GlobalStyle;
