import allSizes from '@/data/size';
import uuConsole from '@/index';
import { TLocalSizeItem } from '@/types';

describe('uuConsole method installSize', () => {
  const sizes = uuConsole.toAry(allSizes) as TLocalSizeItem[];

  it('output built-in size count = 7', () => {
    expect(sizes.length).toBe(7);
  });

  it('output built-in size name in micro micro...', () => {
    const sizeNames = ['micro', 'tiny', 'small', 'medium', 'big', 'large', 'huge'];
    const hasAllName = sizeNames.every(name => !!allSizes[name]);
    expect(hasAllName).toBe(true);
  });

  it('install part sizes', () => {
    expect(uuConsole.getSize('micro')).toBe(undefined);
    expect(uuConsole.getSize('tiny')).toBe(undefined);
    expect(uuConsole.getSize('small')).toBe(undefined);
    expect(uuConsole.getSize('medium')).toBe(undefined);
    const { micro, tiny, small, medium } = allSizes;
    uuConsole.installSize([micro, tiny], small, medium);
    expect(uuConsole.getSize('micro')?.name).toBe('micro');
    expect(uuConsole.getSize('tiny')?.name).toBe('tiny');
    expect(uuConsole.getSize('small')?.name).toBe('small');
    expect(uuConsole.getSize('medium')?.name).toBe('medium');
  });

  it('install all sizes', () => {
    expect(uuConsole.getSize('big')).toBe(undefined);
    expect(uuConsole.getSize('large')).toBe(undefined);
    uuConsole.installSize(sizes);
    expect(uuConsole.getSize('big')?.name).toBe('big');
    expect(uuConsole.getSize('large')?.name).toBe('large');
  });
});
