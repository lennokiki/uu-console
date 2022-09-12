import uuConsole from '@/index';

describe('uuConsole method getThemes', () => {
  it('default theme only one, is No301', () => {
    const keys = Object.keys(uuConsole.getThemes());
    expect(keys).toEqual(['No301']);
  });

  it('set custom theme, the store theme number will change', () => {
    uuConsole.setCustomTheme('myTheme1', []);
    uuConsole.setCustomTheme('myTheme2', []);
    const keys = Object.keys(uuConsole.getThemes());
    expect(keys).toEqual(['No301', 'myTheme1', 'myTheme2']);
  });
});
