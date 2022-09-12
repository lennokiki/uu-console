import uuConsole from '@/index';

describe('uuConsole method useSizeSort', () => {
  it('sizeSort default value is [0,1,2]', () => {
    expect(uuConsole.sizeSort).toEqual([0, 1, 2]);
  });

  it('change the sizeSort', () => {
    uuConsole.useSizeSort([2, 1, 0]);
    expect(uuConsole.sizeSort).toEqual([2, 1, 0]);
  });
});
