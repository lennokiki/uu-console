import uuConsole from '@/index';
import allSizes from '@/data/size';

describe('uuConsole method useSizeOnce', () => {
  it('use has un setted size once', () => {
    uuConsole.useSizeOnce('micro');
    expect(uuConsole.sizeOnce).toBe(null);
  });

  it('use has setted size once', () => {
    uuConsole.installSize(allSizes.big);
    uuConsole.useSizeOnce('big');
    expect(uuConsole.sizeOnce).toBe('big');
    uuConsole.log('log', 'once');
    expect(uuConsole.sizeOnce).toBe(null);
  });
});
