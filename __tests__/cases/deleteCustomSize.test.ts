import uuConsole from '@/index';

describe('uuConsole method deleteCustomSize', () => {
  const sizeProps = [
    {
      fontSize: '20px',
      padding: '10px',
      display: 'inline-block',
    },
    'font-size: 30px,',
  ];

  test.failing('An exception will be thrown when deleting a size that does not exist', () => {
    uuConsole.deleteCustomSize('my-size');
  });

  test.failing('An exception will be thrown when deleting a non custom size', () => {
    uuConsole.deleteCustomSize('mini');
  });

  it('Only custom size can be removed', () => {
    uuConsole.setCustomSize('my-size', sizeProps);
    expect(uuConsole.getSize('my-size')?.props).toEqual(sizeProps);
    uuConsole.deleteCustomSize('my-size');
    expect(uuConsole.getSize('my-size')).toBe(undefined);
  });
});
