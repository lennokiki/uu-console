import uuConsole from '@/index';
import allThemes from '@/data/theme';

describe('uuConsole method useTheme', () => {
  it('use has un setted theme', () => {
    uuConsole.useTheme('No401');
    expect(uuConsole.theme).toBe('No301');
  });

  it('use has setted theme', () => {
    uuConsole.installTheme(allThemes.No501);
    uuConsole.useTheme('No501');
    expect(uuConsole.theme).toBe('No501');
  });
});
