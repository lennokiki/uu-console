import uuConsole from '@/index';

describe('uuConsole method useSizeSortOnce', () => {
  it('sizeSortOnce default value is null', () => {
    expect(uuConsole.sizeSortOnce).toBe(null);
  });

  it('change the sizeSortOnce', () => {
    uuConsole.useSizeSortOnce([2, 1, 0]);
    expect(uuConsole.sizeSortOnce).toEqual([2, 1, 0]);
    uuConsole.log('log', 'once');
    expect(uuConsole.sizeSortOnce).toBe(null);
  });
});
