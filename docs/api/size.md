# 尺寸

尺寸是 `uu-console` 中用来为输出信息设置字体大小、内边距等样式的，核心包只包含默认尺寸 **mini**。如果需要其他尺寸样式，可引入外置的尺寸包后，并安装对应的尺寸即可。全部尺寸包括：
**micro**、**tiny**、**mini**、**small**、**medium**、**big**、**large**、**huge**，总过**8**个

## getSize(name)

根据尺寸名称获取已经安装的尺寸，当未安装时返回 **undefined**

```js
uuConsole.getSize('mini');
```

## getSizes()

获取所有已经安装过的尺寸

```js
uuConsole.getSizes();
```

## useSize(name)

使用某个尺寸（前提先安装 `medium` 后再使用）

```js
uuConsole.useSize('medium').log('Hi', 'UU', 'Console');
```

所有的尺寸样式：
![size1](https://demo.preetyname.com/static/uuConsole/images/size1.png)
![size2](https://demo.preetyname.com/static/uuConsole/images/size2.png)

## useSizeOnce(name)

使用某个尺寸，仅且只生效一次

```js
uuConsole.useSizeOnce('medium').log('Hi', 'UU', 'Console');
```

## useSizeSort([0, 1, 2])

对尺寸的顺序样式进行排序，类似主题的排序功能，默认顺序为 **[0, 1, 2]**。
请注意，尺寸顺序的数组长度请和当前使用的尺寸的样式数量保持一致，否则无法生效。

```js
uuConsole.useThemeSort([1, 2, 0]).log('Hi', 'UU', 'After');
```

## useSizeSortOnce([0, 1, 2])

对尺寸的顺序样式进行排序，仅且生效一次，默认值为 **null**

```js
uuConsole.useSizeSortOnce([1, 2, 0]).log('Hi', 'UU', 'Console');
```

## setCustomSize(name, size)

设置自定义尺寸，同名尺寸无法被设置

```js
const sizeProps = [
  {
    fontSize: '14px',
    padding: '5px 10px',
    display: 'inline-block', // for firefox
  },
  'font-size: 20px; padding: 10px; dispaly: inline-block;',
];

uuConsole
  .setCustomSize('my-size', sizeProps)
  .useSize('my-size')
  .useTheme('No301')
  .log('Hello', 'Is UUConsole?');
```

## deleteCustomSize

删除自定义尺寸，只有自定义尺寸可以进行删除

```js
// micro是内置尺寸，无法被删除。
uuConsole.deleteCustomSize('micro');

// 只有自定义尺寸才可以进行删除。
uuConsole.setCustomSize('my-size', []);
uuConsole.deleteCustomSize('my-size');
```

## installSize(size1, [size2, size3...])

安装其他尺寸

```js
import uuSizes from 'uu-console/dist/size/size.esm.js';

// 安装全部尺寸
uuConsole.installSize(uuConsole.toAry(uuSizes));

// 安装部分尺寸
const { micro, medium } = uuSizes;
uuConsole.installTheme(micro, medium);
```
