import uuConsole from '@/index';
import allSizes from '@/data/size';
import allThemes from '@/data/theme';
import { TLocalSizeItem, TLocalThemeItem } from '@/types';

describe('uuConsole method log', () => {
  const sizes = uuConsole.toAry(allSizes) as TLocalSizeItem[];
  const themes = uuConsole.toAry(allThemes) as TLocalThemeItem[];
  uuConsole.installSize(sizes);
  uuConsole.installTheme(themes);

  it('log built-in size mini and theme No301', () => {
    uuConsole.log('Hi', 'UU-Console');
    const { content, styles } = uuConsole.lastLogText;
    const logContent = '%cHi%cUU-Console';
    const logStyles = [
      'display:inline-block;font-size:14px;padding:12px;color:#222222;background:#FFFF99;',
      'display:inline-block;font-size:14px;padding:12px;color:#FFFFFF;background:#993399;',
    ];
    expect(content).toBe(logContent);
    expect(styles).toEqual(logStyles);
  });

  it('change theme sort, and use big size and No606 theme', () => {
    uuConsole.useThemeSort([1, 2, 0]);
    uuConsole.useTheme('No606').useSize('big').log('Hi', 'UU', '-Console');
    const { content, styles } = uuConsole.lastLogText;
    const logContent = '%cHi%cUU%c-Console';
    const logStyles = [
      'display:inline-block;font-size:24px;padding:30px;color:#FFFFFF;background:#990033;',
      'display:inline-block;font-size:24px;padding:30px;color:#FFFFFF;background:#CCCCCC;',
      'display:inline-block;font-size:24px;padding:30px;color:#FFFFFF;background:#333366;',
    ];
    expect(content).toBe(logContent);
    expect(styles).toEqual(logStyles);
  });

  it('set custom theme and size', () => {
    const sizeProps = [
      {
        fontSize: '20px',
        padding: '10px',
        display: 'inline-block',
      },
      'font-size: 30px;',
    ];
    const themeProps = [
      {
        color: '#fff',
        background: 'fuchsia',
      },
      'background-color: green;color: #555;',
    ];
    uuConsole.setCustomSize('my-size', sizeProps).useSizeOnce('my-size');
    uuConsole.setCustomTheme('my-theme', themeProps).useThemeOnce('my-theme');
    uuConsole.useSizeSortOnce([1, 0]).useThemeSortOnce([1, 0]).log('Hello', 'UU', 'Go');
    const { content, styles } = uuConsole.lastLogText;
    const logContent = '%cHello%cUU%cGo';
    const logStyles = [
      'font-size: 30px;background-color: green;color: #555;',
      'font-size:20px;padding:10px;display:inline-block;color:#fff;background:fuchsia;',
      'font-size: 30px;background-color: green;color: #555;',
    ];
    expect(content).toBe(logContent);
    expect(styles).toEqual(logStyles);
  });

  it('use custom style', () => {
    uuConsole
      .useThemeSort([0, 1])
      .useSizeSort([0, 1])
      .log({ text: 'Hello', style: 'color: red;' }, { text: 'UU', size: 'mini', theme: 'No505' });

    const { content, styles } = uuConsole.lastLogText;
    const logContent = '%cHello%cUU';
    const logStyles = [
      'color: red;',
      'display:inline-block;font-size:14px;padding:12px;color:#FFFFFF;background:#999933;',
    ];
    expect(content).toBe(logContent);
    expect(styles).toEqual(logStyles);
  });

  it('use empty size and theme', () => {
    uuConsole.setCustomTheme('myTheme9', []);
    uuConsole.setCustomSize('mySize9', []);
    uuConsole.useTheme('myTheme9').useSize('mySize9').log('Hello', 'UU');
    const { content, styles } = uuConsole.lastLogText;
    expect(content).toBe('%cHello%cUU');
    expect(styles).toEqual(['', '']);
  });
});
