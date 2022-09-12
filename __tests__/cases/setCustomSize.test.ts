import uuConsole from '@/index';

describe('uuConsole method setCustomSize', () => {
  const sizeProps = [
    {
      fontSize: '20px',
      padding: '10px',
      display: 'inline-block',
    },
    'font-size: 30px,',
  ];

  test.failing('Existing dimension names cannot be set repeatedly', () => {
    uuConsole.setCustomSize('mini', sizeProps);
  });

  it('Set custom size my-size', () => {
    uuConsole.setCustomSize('my-size', sizeProps);
    expect(uuConsole.getSize('my-size')?.props).toEqual(sizeProps);
  });
});
