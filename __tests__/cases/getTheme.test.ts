import uuConsole from '@/index';

describe('uuConsole method getTheme', () => {
  it('default theme name No301', () => {
    expect(uuConsole.getTheme('No301')?.name).toBe('No301');
  });

  it('un setted theme name get undefined', () => {
    expect(uuConsole.getTheme('aaa')).toBe(undefined);
  });
});
