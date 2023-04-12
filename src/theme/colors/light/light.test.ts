import light from './index';

describe('light.ts', () => {
  it('should return the correct schema', () => {
    expect(light('red')).toHaveProperty('bg', 'hsl(0, 100%, 97%)');
    expect(light('green')).toHaveProperty('bg', 'hsl(134, 100%, 97%)');
    expect(light('blue')).toHaveProperty('bg', 'hsl(208, 100%, 97%)');
  });

  it('should contain neutral colors', () => {
    expect(light('red')).toHaveProperty('shadows');
    expect(light('green')).toHaveProperty('shadows');
    expect(light('blue')).toHaveProperty('shadows');
  });
});
