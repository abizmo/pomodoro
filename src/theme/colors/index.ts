import { Mode, Schema } from 'styled-components';
import dark from './dark';
import light from './light';

const colors = (mode: Mode, schema: Schema) =>
  mode === 'light' ? light(schema) : dark(schema);

export default colors;
