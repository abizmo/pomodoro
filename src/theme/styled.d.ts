import 'styled-components';

// and extend them!
declare module 'styled-components' {
  type Color = {
    bg: string;
    text: string;
    'text-secondary'?: string;
    main: string;
    secondary: string;
  };

  type NeutralColor = {
    off: string;
    line: string;
    border: string;
  };

  enum Sizes {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
  }

  enum FontFamilies {
    sans = 'sans',
  }
  export interface DefaultTheme {
    colors: {
      light: {
        blue: Color;
        green: Color;
        red: Color;
        neutral: NeutralColor;
      };
      dark: {
        blue: Color;
        green: Color;
        red: Color;
        neutral: NeutralColor;
      };
    };
    fontFamily: {
      [key in FontFamilies]: string;
    };
    fontSizes: {
      [key in Sizes]: string;
    };
    lineHeight: {
      tight: string;
    };
  }
}
