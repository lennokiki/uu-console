import uuConsole from '@/index';

describe('uuConsole method useThemeSortOnce', () => {
  it('themeSortOnce default value is null', () => {
    expect(uuConsole.themeSortOnce).toBe(null);
  });

  it('change the themeSortOnce', () => {
    uuConsole.useThemeSortOnce([2, 1, 0]);
    expect(uuConsole.themeSortOnce).toEqual([2, 1, 0]);
    uuConsole.log('log', 'once');
    expect(uuConsole.themeSortOnce).toBe(null);
  });
});
