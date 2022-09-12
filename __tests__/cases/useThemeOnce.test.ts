import uuConsole from '@/index';
import allThemes from '@/data/theme';

describe('uuConsole method useTheme', () => {
  it('use has un setted theme once', () => {
    uuConsole.useThemeOnce('No401');
    expect(uuConsole.themeOnce).toBe(null);
  });

  it('use has setted theme once', () => {
    uuConsole.installTheme(allThemes.No501);
    uuConsole.useThemeOnce('No501');
    expect(uuConsole.themeOnce).toBe('No501');
    uuConsole.log('log', 'once');
    expect(uuConsole.themeOnce).toBe(null);
  });
});
