import { ThemeProvider } from 'styled-components';
import GlobalStyle, { myTheme } from './theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <h1>Hola mundo</h1>
    </ThemeProvider>
  );
}

export default App;
