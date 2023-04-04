import { type DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    light: {
      blue: {
        text: 'hsl(208, 54%, 18%)',
        bg: 'hsl(208, 100%, 97%)',
        main: 'hsla(208, 100%, 65%, 0.62)',
        secondary: 'hsla(208, 100%, 65%, 0.15)',
      },
      green: {
        text: 'hsl(132, 52%, 16%)',
        bg: 'hsl(134, 100%, 97%)',
        main: 'hsla(134, 66%, 58%, 0.62)',
        secondary: 'hsla(134, 66%, 58%, 0.15)',
      },
      red: {
        text: 'hsl(0, 54%, 18%)',
        bg: 'hsl(0, 100%, 97%)',
        main: 'hsla(0, 100%, 65%, 0.71)',
        secondary: 'hsla(0, 100%, 65%, 0.15)',
      },
      neutral: {
        off: 'hsla(0, 0%, 0%, 0.24)',
        line: 'hsla(0, 0%, 0%, 0.15)',
        border: 'hsla(0, 0%, 0%, 0.05)',
      },
    },
    dark: {
      blue: {
        bg: 'hsl(207, 53%, 3%)',
        'text-secondary': 'hsl(207, 100%, 93%)',
        text: 'hsl(208, 100%, 97%)',
        main: 'hsla(208, 100%, 65%, 0.62)',
        secondary: 'hsla(208, 100%, 65%, 0.15)',
      },
      green: {
        bg: 'hsl(133, 53%, 3%)',
        'text-secondary': 'hsl(135, 77%, 92%)',
        text: 'hsl(134, 100%, 97%)',
        main: 'hsla(134, 66%, 58%, 0.62)',
        secondary: 'hsla(134, 66%, 58%, 0.15)',
      },
      red: {
        bg: 'hsl(0, 53%, 3%)',
        'text-secondary': 'hsl(0, 100%, 93%)',
        text: 'hsl(0, 100%, 97%)',
        main: 'hsla(0, 100%, 65%, 0.71)',
        secondary: 'hsla(0, 100%, 65%, 0.15)',
      },
      neutral: {
        off: 'hsla(0, 0%, 100%, 0.24)',
        line: 'hsla(0, 0%, 100%, 0.15)',
        border: 'hsla(0, 0%, 100%, 0.05)',
      },
    },
  },
  fontFamily: {
    sans: 'Roboto Flex, sans-serif',
  },
  fontSizes: {
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '256px',
  },
  lineHeight: {
    tight: '85%',
  },
};

export default theme;
