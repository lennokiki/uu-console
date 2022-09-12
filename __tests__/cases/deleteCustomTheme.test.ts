import uuConsole from '@/index';

describe('uuConsole method deleteCustomTheme', () => {
  const themeProps = [
    {
      color: '#fff',
      background: 'fuchsia',
    },
    'background-color: green;color: #555;',
  ];
  const THEME_NAME = 'my-theme';

  test.failing('An exception will be thrown when deleting a theme that does not exist', () => {
    uuConsole.deleteCustomTheme(THEME_NAME);
  });

  test.failing('An exception will be thrown when deleting a non custom theme', () => {
    uuConsole.deleteCustomTheme('No301');
  });

  it('Only custom size can be removed', () => {
    uuConsole.setCustomTheme(THEME_NAME, themeProps);
    expect(uuConsole.getTheme(THEME_NAME)?.props).toEqual(themeProps);
    uuConsole.deleteCustomTheme(THEME_NAME);
    expect(uuConsole.getTheme(THEME_NAME)).toBe(undefined);
  });
});
