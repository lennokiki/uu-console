import uuConsole from '@/index';

describe('uuConsole method useThemeSort', () => {
  it('themeSort default value is [0,1,2]', () => {
    expect(uuConsole.themeSort).toEqual([0, 1, 2]);
  });

  it('change the themeSort', () => {
    uuConsole.useThemeSort([2, 1, 0]);
    expect(uuConsole.themeSort).toEqual([2, 1, 0]);
  });
});
