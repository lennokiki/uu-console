# 简介

## uu-console 是什么？

`uu-console` 是 `console.log` 的升级版，当使用 `console.log` 在打印日志时，如果要添加一些特殊样式，只能使用其本身的 api，如：

```js
console.log('%cHi uu-console', 'background: red; font-size: 16px');
```

以上是给输出日志修改了字号以及添加了背景颜色，那如果输出的日志再复杂一点，这样的 api 并不太方便，所以就有了 `uu-console`。
可以更好的帮助开发者来输出不同风格的日志信息，并且可实现高度自定义（默认情况下，`uu-console` 使用主题 `No301` 和尺寸 `mini`）。

> 使用 `uu-console` 的输出：

```js
uuConsole.log('Hi', 'this is', 'uu-console');
```

输出结果如：
![img](https://demo.preetyname.com/static/uuConsole/docs/intro-1.jpg)

> 自定义的复杂输出形式：

```js
uuConsole.log(
  { text: 'Hi', size: 'mini', theme: 'No301' },
  'Boy',
  { text: 'This is UU', style: 'color: green; background: pink' },
  { text: 'Console', style: { fontSize: '20px', color: 'fuchsia' } }
);
```

输出结果如：
![img](https://demo.preetyname.com/static/uuConsole/docs/intro-2.jpg)
