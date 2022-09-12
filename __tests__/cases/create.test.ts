import uuConsole from '@/index';

describe('uuConsole method create', () => {
  it('create another uuConsole instance', () => {
    const uu = uuConsole.create();
    expect(typeof uu.log).toBe('function');
    const UUConsole = uuConsole.getClass();
    expect(uu instanceof UUConsole).toBe(true);
  });
});
