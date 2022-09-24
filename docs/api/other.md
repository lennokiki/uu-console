# 其他辅助方法

## create()

生成一个新的 `uu-console` 实例

```js
const uu2 = uuConsole.create();
uu2.log('The next', 'UU');
```

## clone()

克隆当前 `uu-console` 实例对象，生成一个新的对象

```js
const uu2 = uuConsole.clone();
uu2.useTheme('No606').useSize('mini').log('The clone', 'UU');
```

## toAry(Object)

将对象的值转换为一个数组

```js
const ary = uuConsole.toAry({ a: 1, b: 2 });
// ary = [1, 2]
```
