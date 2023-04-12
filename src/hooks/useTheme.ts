import { useState } from 'react';
import { DefaultTheme, Mode, Schema } from 'styled-components';
import commons from '../theme/commons';
import colors from '../theme/colors';

const composeTheme = (mode: Mode, schema: Schema) => ({
  colors: colors(mode, schema),
  ...commons,
});

function useTheme() {
  const [mode, setMode] = useState<Mode>('light');
  const [schema, setSchema] = useState<Schema>('green');
  const [theme, setTheme] = useState<DefaultTheme>(composeTheme(mode, schema));

  const toggleMode = () => {
    setMode((prev) => {
      if (prev === 'light') {
        setTheme(composeTheme('dark', schema));
        return 'dark';
      }
      setTheme(composeTheme('light', schema));
      return 'light';
    });
  };

  const selectSchema = (newSchema: Schema) => {
    setSchema(newSchema);
    setTheme(composeTheme(mode, newSchema));
  };

  const isDark = mode === 'dark';

  return {
    theme,
    toggleMode,
    selectSchema,
    isDark,
  };
}

export default useTheme;
