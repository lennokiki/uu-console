import uuConsole from '@/index';

describe('uuConsole method getSize', () => {
  it('default size name is mini', () => {
    expect(uuConsole.getSize('mini')?.name).toBe('mini');
  });

  it('un setted size name get undefined', () => {
    expect(uuConsole.getSize('aaa')).toBe(undefined);
  });
});
