import dark from './index';

describe('dark.ts', () => {
  it('should return the correct schema', () => {
    expect(dark('red')).toHaveProperty('bg', 'hsl(0, 53%, 3%)');
    expect(dark('green')).toHaveProperty('bg', 'hsl(133, 53%, 3%)');
    expect(dark('blue')).toHaveProperty('bg', 'hsl(207, 53%, 3%)');
  });

  it('should contain neutral colors', () => {
    expect(dark('red')).toHaveProperty('shadows');
    expect(dark('green')).toHaveProperty('shadows');
    expect(dark('blue')).toHaveProperty('shadows');
  });
});
