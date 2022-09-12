import allThemes from '@/data/theme';
import uuConsole from '@/index';
import { TLocalThemeItem } from '@/types';

describe('uuConsole method installTheme', () => {
  const themes = uuConsole.toAry(allThemes) as TLocalThemeItem[];

  it('output built-in theme count = 54', () => {
    expect(themes.length).toBe(54);
  });

  it('output built-in theme name in No101-No906 ... and Nox01', () => {
    const themeNames: string[] = [];
    for (let i = 1; i <= 9; i++) {
      for (let j = 1; j <= 6; j++) {
        if (i === 3 && j === 1) {
          continue;
        } else {
          themeNames.push(`No${i}0${j}`);
        }
      }
    }
    themeNames.push('Nox01');
    const hasAllName = themeNames.every(name => !!allThemes[name]);
    expect(hasAllName).toBe(true);
  });

  it('install part themes', () => {
    expect(uuConsole.getTheme('No401')).toBe(undefined);
    expect(uuConsole.getTheme('No506')).toBe(undefined);
    expect(uuConsole.getTheme('No803')).toBe(undefined);
    expect(uuConsole.getTheme('No903')).toBe(undefined);
    const { No401, No506, No803, No903 } = allThemes;
    uuConsole.installTheme([No401, No506], No803, No903);
    expect(uuConsole.getTheme('No401')?.name).toBe('No401');
    expect(uuConsole.getTheme('No506')?.name).toBe('No506');
    expect(uuConsole.getTheme('No803')?.name).toBe('No803');
    expect(uuConsole.getTheme('No903')?.name).toBe('No903');
  });

  it('install all themes', () => {
    expect(uuConsole.getTheme('No101')).toBe(undefined);
    expect(uuConsole.getTheme('Nox01')).toBe(undefined);
    uuConsole.installTheme(themes);
    expect(uuConsole.getTheme('No101')?.name).toBe('No101');
    expect(uuConsole.getTheme('Nox01')?.name).toBe('Nox01');
  });
});
