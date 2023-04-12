import { ColorMode, ColorSchema, Shadow } from 'styled-components';

const schemas: ColorSchema[] = [
  {
    id: 'blue',
    bg: 'hsl(207, 53%, 3%)',
    text: 'hsl(208, 100%, 97%)',
    'text-secondary': 'hsl(207, 100%, 93%)',
    surface: 'hsla(208, 100%, 65%, 0.62)',
    'surface-secondary': 'hsla(208, 100%, 65%, 0.15)',
  },
  {
    id: 'green',
    bg: 'hsl(133, 53%, 3%)',
    text: 'hsl(134, 100%, 97%)',
    'text-secondary': 'hsl(135, 77%, 92%)',
    surface: 'hsla(134, 66%, 58%, 0.62)',
    'surface-secondary': 'hsla(134, 66%, 58%, 0.15)',
  },
  {
    id: 'red',
    bg: 'hsl(0, 53%, 3%)',
    text: 'hsl(0, 100%, 97%)',
    'text-secondary': 'hsl(0, 100%, 93%)',
    surface: 'hsla(0, 100%, 65%, 0.71)',
    'surface-secondary': 'hsla(0, 100%, 65%, 0.15)',
  },
];

const shadows: Shadow = {
  25: 'hsla(0, 0%, 100%, 0.24)',
  15: 'hsla(0, 0%, 100%, 0.15)',
  5: 'hsla(0, 0%, 100%, 0.05)',
};

const selectSchema = (id: string): ColorSchema | undefined =>
  schemas.find((schema) => schema.id === id);

const dark = (id: string): ColorMode => {
  const selectedSchema = selectSchema(id);
  if (!selectedSchema) throw new Error(`The ${id} schema doesn't exist!`);

  return {
    text: selectedSchema.text,
    bg: selectedSchema.bg,
    surface: selectedSchema.surface,
    'surface-secondary': selectedSchema['surface-secondary'],
    shadows,
  };
};

export default dark;
