import { createGlobalStyle } from 'styled-components';

import resetCSS from './reset';
import utilityClasses from './utilities';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  ${utilityClasses}

  body {
    background-color: ${(props) => props.theme.colors.light.red.bg};
    color: ${({ theme }) => theme.colors.light.red.text};
    font-family: ${({ theme }) => theme.fontFamily.sans};
  }
`;

export default GlobalStyle;
