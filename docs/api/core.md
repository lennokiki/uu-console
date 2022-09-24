# 输出

## log(infos)

输出日志信息，支持多种输出形式

```js
  // 使用字符串
  uuConsole.log('Hi', 'UU')

  // 使用数组
  uuConsole.log(['Hi', 'UU'])

  // 使用不同的主题和尺寸
  uuConsole.log(
    { text: 'Hi', size: 'small', theme: 'No501' },
    { text: 'UU', size: 'medium', theme: 'No304'},
    'Console',
    ...
  )

  // 使用自定义style
  uuConsole.log(
    [
      { text: 'Hi', size: 'micro', theme: 'No201' },
      'Boy',
      { text: 'This is UU', style: 'color: green; background: pink' },
      { text: 'Console', style: { fontSize: '20px', color: 'fuchsia' } }
    ]
  )
```
