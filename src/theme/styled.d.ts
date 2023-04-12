import 'styled-components';

// and extend them!
declare module 'styled-components' {
  interface ColorSchema {
    id: string;
    text: string;
    bg: string;
    surface: string;
    'text-secondary'?: string;
    'bg-secondary'?: string;
    'surface-secondary'?: string;
  }

  interface Shadow {
    [key: number]: string;
  }

  interface ColorMode extends Omit<ColorSchema, 'id'> {
    shadows: Shadow;
  }

  type Schema = 'red' | 'green' | 'blue';
  type Mode = 'light' | 'dark';

  enum Sizes {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
  }

  enum FontFamilies {
    sans = 'sans',
  }

  interface Commons {
    fontFamily?: {
      [key in FontFamilies]: string;
    };
    fontSizes?: {
      [key in Sizes]: string;
    };
    lineHeight?: {
      tight: string;
    };
  }
  export interface DefaultTheme extends Commons {
    colors: ColorMode;
  }
}
