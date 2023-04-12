import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import useTheme from '../hooks/useTheme';

function Theme({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
