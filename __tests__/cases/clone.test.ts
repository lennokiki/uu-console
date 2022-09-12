import uuConsole from '@/index';

describe('uuConsole method clone', () => {
  it('clone another uuConsole instance', () => {
    const uu = uuConsole.clone();
    expect(typeof uu.log).toBe('function');
    const UUConsole = uuConsole.getClass();
    expect(uu instanceof UUConsole).toBe(true);
  });
});
