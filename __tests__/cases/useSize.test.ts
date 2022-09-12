import uuConsole from '@/index';
import allSizes from '@/data/size';

describe('uuConsole method useSize', () => {
  it('use has un setted size', () => {
    uuConsole.useSize('micro');
    expect(uuConsole.size).toBe('mini');
  });

  it('use has setted size', () => {
    uuConsole.installSize(allSizes.micro);
    uuConsole.useSize('micro');
    expect(uuConsole.size).toBe('micro');
  });
});
