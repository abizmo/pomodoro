import 'styled-components';

export enum Sizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

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

  enum FontFamilies {
    sans = 'sans',
  }

  type Padding = {
    inline: string;
    block: string;
  };
  export interface DefaultTheme {
    borderRadius: {
      [key in Sizes]?: string;
    };
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
    padding: {
      [key in Sizes]?: Padding;
    };
    width: {
      [key in Sizes]?: string;
    };
  }
}
