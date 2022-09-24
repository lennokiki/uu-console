# 主题

主题是 `uu-console` 中用来为输出信息提供样式的，主要包括背景色、字体颜色等，核心包本身只包含默认主题 **No301**。如果需要其他主题样式，可引入外置的主题包后，并安装对应的主题才可进行使用。主题以 `No` 为前缀，后跟主题标识数字在范围 `101 ~ 106` 之间，总共包含**55**个（特殊主题 `Nox01`）。同时，也支持自定义主题，满足定制化需求。

## getTheme(name)

根据主题名称获取已经安装的主题，当未安装时返回 **undefined**

```js
uuConsole.getTheme('No301');
```

## getThemes()

获取所有已经安装过的主题

```js
uuConsole.getThemes();
```

## useTheme(name)

使用某个主题（前提先安装 `No101` 后再使用）

```js
uuConsole.useTheme('No101').log('Hi', 'UU', 'Console');
```

以下是所有的主题编号及样式

![No101-106](https://demo.preetyname.com/static/uuConsole/images/theme-no1.png)
![No201-206](https://demo.preetyname.com/static/uuConsole/images/theme-no2.png)
![No301-306](https://demo.preetyname.com/static/uuConsole/images/theme-no3.png)
![No401-406](https://demo.preetyname.com/static/uuConsole/images/theme-no4.png)
![No501-506](https://demo.preetyname.com/static/uuConsole/images/theme-no5.png)
![No601-606](https://demo.preetyname.com/static/uuConsole/images/theme-no6.png)
![No701-706](https://demo.preetyname.com/static/uuConsole/images/theme-no7.png)
![No801-806](https://demo.preetyname.com/static/uuConsole/images/theme-no8.png)
![No901-906 and Nox01](https://demo.preetyname.com/static/uuConsole/images/theme-no9.png)

## useThemeOnce(name)

使用某个主题，仅且生效一次

```js
uuConsole.useThemeOnce('No101').log('Hi', 'UU', 'Console');
```

## useThemeSort([0, 1, 2])

重新排列主题色卡的顺序，默认顺序为 **[0, 1, 2]**

```js
// 使用主题排序前
uuConsole.useTheme('No302').log('Hi', 'UU', 'Before');

// 使用主题排序后
uuConsole.useThemeSort([1, 2, 0]).log('Hi', 'UU', 'After');
```

输出结果：
![themeSort](https://demo.preetyname.com/static/uuConsole/images/themeSort.png)

## useThemeSortOnce([0, 1, 2])

重新排列主题色卡的顺序，仅且生效一次，默认值为 **null**

```js
uuConsole.useThemeSortOnce([1, 2, 0]).log('Hi', 'UU', 'Console');
```

## setCusomTheme(name, theme)

设置自定义主题，同名主题无法被设置

```js
const themeProps = [
  {
    color: '#fff',
    background: '#ff00ee',
    fontWeight: 'bold',
  },
  {
    color: '#555',
    background: '#dd33aa',
    fontStyle: 'italic',
    letterSpacing: '5px',
  },
  'color: #ff00cc; background: #111;',
];

uuConsole.setCustomTheme('my-theme', themeProps).useTheme('my-theme');
uuConsole.useSize('medium').log('Hello', 'B-O-Y,', 'Where are you from');
```

## deleteCustomTheme(name)

删除自定义主题，只有自定义主题可以进行删除

```js
// No101也是内置主题（需要引入并安装）, 不允许删除!
uuConsole.deleteCustomTheme('No101');

// 只有自定义主题才可被删除.
uuConsole.setCustomTheme('my-theme', []);
uuConsole.deleteCustomTheme('my-theme');
```

## installTheme(theme1, [theme2, theme3...])

安装其他主题

```js
import uuThemes from 'uu-console/dist/theme/theme.esm.js';

// 安装全部主题
uuConsole.installTheme(uuConsole.toAry(uuThemes));

// 安装部分主题
const { No404, No806 } = uuThemes;
uuConsole.installTheme(No404, No806);
```
