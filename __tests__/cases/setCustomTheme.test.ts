import uuConsole from '@/index';

describe('uuConsole method setCustomTheme', () => {
  const themeProps = [
    {
      color: '#fff',
      background: 'fuchsia',
    },
    'background-color: green;color: #555;',
  ];

  test.failing('Existing theme names cannot be set repeatedly', () => {
    uuConsole.setCustomTheme('No301', themeProps);
  });

  it('Set custom them my-theme', () => {
    uuConsole.setCustomTheme('my-theme', themeProps);
    expect(uuConsole.getTheme('my-theme')?.props).toEqual(themeProps);
  });
});
