import uuConsole from '@/index';

describe('uuConsole method getSizes', () => {
  it('default size only one, is mini', () => {
    const keys = Object.keys(uuConsole.getSizes());
    expect(keys).toEqual(['mini']);
  });

  it('set custom size, the store size number will change', () => {
    uuConsole.setCustomSize('mySize1', []);
    uuConsole.setCustomSize('mySize2', []);
    const keys = Object.keys(uuConsole.getSizes());
    expect(keys).toEqual(['mini', 'mySize1', 'mySize2']);
  });
});
