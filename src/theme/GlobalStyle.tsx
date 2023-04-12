import { createGlobalStyle } from 'styled-components';

import resetCSS from './reset';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily?.sans || 'sans-serif'};
  }
`;

export default GlobalStyle;
