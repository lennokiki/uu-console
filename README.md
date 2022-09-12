# uu-console

Ho, this is a toy. When you use `console.log` to print some logs, this can help you do some useless things.

## What is uu-console

- Support built-in multiple theme color cards to display different print log background theme colors.
- Support built-in multiple sizes, display different print log font sizes.
- Supports custom sizes and themes.
- Compactly, core library only 8K.

## Features

- Multiple theme
- Custom theme
- Theme sort
- Multiple size
- Custom size
- Multiple uuConsole instance

## Brower Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                          | Latest ✔                                                                                             | Latest ✔                                                                                          | Latest ✔                                                                                       | Latest ✔                                                                                    | 11 ✔                                                                                                                                    |

## Installing

Using npm:

```bash
$ npm install uu-console
```

Using yarn:

```bash
$ yarn add uu-console
```

Using pnpm:

```bash
$ pnpm add uu-console
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/uu-console/dist/uu-console.umd.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/uu-console/dist/uu-console.umd.js"></script>
```

## Examples

in umd html

```html
uuConsole.log('Hello', 'This is', 'uu-console') uuConsole.log(['Hello', 'This is', 'uu-console'])
```

in esm project

```js
import uuConsole from 'uu-console';

uuConsole.log('Hello', 'uu-console');
```

load other theme and install.

```js
// By default, only one theme 'No301' is included, and other themes need to be manually imported.
import uuThemes from 'uu-console/theme/theme.esm.js';

// Install other themes, so you can use other themes, like `No601`、`No304`...
uuConsole.installTheme(uuThemes.No601, uuThemes.No304);

uuConsole.useTheme('No601').log('Hi', 'UU');
```

load other size and install.

```js
// By default, only one size 'mini' is included, and other sizes need to be manually imported.
import uuSizes from 'uu-console/size/size.esm.js';

// Install other sizes, so you can use other sizes, like `micro`、 `big`....
uuConsole.installSize(uuSizes.micro, uuSize.big);

uuConsole.useSize('micro').log('Hi', 'UU');
```

## API

> log(infos)

To print log infos.

```js
  // use string.
  uuConsole.log('Hi', 'UU')

  // use string array.
  uuConsole.log(['Hi', 'UU'])

  // use object and differences size and theme, remember install the size and theme before using.
  uuConsole.log(
    { text: 'Hi', size: 'small', theme: 'No501' },
    { text: 'UU', size: 'medium', theme: 'No304'},
    'Console',
    ...
  )

  // use array object and custom style, and style support object and string
  uuConsole.log(
    [
      { text: 'Hi', size: 'micro', theme: 'No201' },
      'Boy',
      { text: 'This is UU', style: 'color: green; background: pink' },
      { text: 'Console', style: { fontSize: '20px', color: 'fuchsia' } }
    ]
  )
```

> useTheme(name)

Use built in themes, the built in theme name is range from `No101-No106`、`No201-No206`、
`No301-No306`、`No401-No406`、`No501-No506`、`No601-No606`、`No701-No706`、`No801-No806`、
`No901-No902` and `Nox01`, total 55 themes!

And default theme is `No301`, if you like others themes, please import and install them before using.

Note that the theme is global configuration, which can take effect once set.

```js
// use `No101` theme.
uuConsole.useTheme('No101').log('Hi', 'UU', 'Console');
```

and here are the total themes.

![No101-106](https://demo.preetyname.com/static/uuConsole/images/theme-no1.png)
![No201-206](https://demo.preetyname.com/static/uuConsole/images/theme-no2.png)
![No301-306](https://demo.preetyname.com/static/uuConsole/images/theme-no3.png)
![No401-406](https://demo.preetyname.com/static/uuConsole/images/theme-no4.png)
![No501-506](https://demo.preetyname.com/static/uuConsole/images/theme-no5.png)
![No601-606](https://demo.preetyname.com/static/uuConsole/images/theme-no6.png)
![No701-706](https://demo.preetyname.com/static/uuConsole/images/theme-no7.png)
![No801-806](https://demo.preetyname.com/static/uuConsole/images/theme-no8.png)
![No901-906 and Nox01](https://demo.preetyname.com/static/uuConsole/images/theme-no9.png)

> useThemeOnce(name)

Use built in theme, but effective only once.

```js
// use `No101` theme once
uuConsole.useThemeOnce('No101').log('Hi', 'UU', 'Console');
```

> useThemeSort([0, 1, 2])

Sort the built in theme card position. And the default value is **[0, 1, 2]**.
Note that the themeSort is global configuration, which can take effect once use.

```js
// use theme sort before
uuConsole.useTheme('No302').log('Hi', 'UU', 'Before');

// use theme sort to [1, 2, 0]
uuConsole.useThemeSort([1, 2, 0]).log('Hi', 'UU', 'After');
```

![themeSort](https://demo.preetyname.com/static/uuConsole/images/themeSort.png)

> useThemeSortOnce([0, 1, 2])

Sort the built in theme, but only effective once. And the default value is **null**.

```js
// use theme sort to [1, 2, 0] once
uuConsole.useThemeSortOnce([1, 2, 0]).log('Hi', 'UU', 'Console');
```

> setCustomTheme(name, theme)

If the built-in theme is not to your liking, you can customize the theme and use it.
And theme cannot be set repeat registration.

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

> delCustomTheme(name)

Only custom theme can be deleted.

```js
// No101 is not custom, cannot be deleted!
uuConsole.delCustomTheme('No101');

// Only custom theme can be deleted.
uuConsole.setCustomTheme('my-theme', []);
uuConsole.delCustomTheme('my-theme');
```

> installTheme(theme1, [theme2, theme3...])

Install other built-in themes.

```js
import uuThemes from 'uu-console/dist/theme/theme.esm.js';

// install all themes.
uuConsole.installTheme(uuConsole.toAry(uuThemes));

// or just install part of themes. Notice theme No301 is default theme, not in uuThemes.
const { No404, No806 } = uuThemes;
uuConsole.installTheme(No404, No806);
```

> useSize(name)

Use built in sizes, the built in size name contains `micro`、`tiny`、`mini`、`small`、`medium`、`big`、`large`、`huge`, total 8 sizes!

And default size is `mini`, if you like other sizes, please import and install theme before using.

Note that the size is global configuration, which can take effect once use.

```js
// use `medium` size.
uuConsole.useSize('medium').log('Hi', 'UU', 'Console');
```

![size1](https://demo.preetyname.com/static/uuConsole/images/size1.png)
![size2](https://demo.preetyname.com/static/uuConsole/images/size2.png)

> useSizeOnce(name)

Use built in sizes, but effective only once

```js
// use `medium` size just once.
uuConsole.useSizeOnce('medium').log('Hi', 'UU', 'Console');
```

> useSizeSort([0, 1, 2])

Sort the custom size position, and the default value is **[0, 1, 2]**.
When set custom size and use the size, please reset the custom size number equal to the sizeSort, otherwise the size style will not effective.
Note that the sizeSort is global configuration, which can take effect once use.

```js
// use theme sort to [1, 2, 0].
uuConsole.useThemeSort([1, 2, 0]).log('Hi', 'UU', 'After');
```

> useSizeSortOnce([0, 1, 2])

Sort size, but only effective once. And the default value is **null**.

```js
// use size sort to [1, 2, 0] once.
uuConsole.useSizeSortOnce([1, 2, 0]).log('Hi', 'UU', 'Console');
```

> setCustomSize(name, size)

If the built-in size is not to your liking, you can customize the size and use it.
And size cannot be set repeat registration.

```js
const sizeProps = [
  {
    fontSize: '14px',
    padding: '5px 10px',
    display: 'inline-block', // for firefox
  },
  'font-size: 20px; padding: 10px; dispaly: inline-block;',
];

// set custom size and use it.
uuConsole
  .setCustomSize('my-size', sizeProps)
  .useSize('my-size')
  .useTheme('No301')
  .log('Hello', 'Is UUConsole?');
```

> deleteCustomSize(size)

Only custom size can be deleted.

```js
// micro is not custom, cannot be deleted!
uuConsole.deleteCustomSize('micro');

// Only custom size can be deleted.
uuConsole.setCustomSize('my-size', []);
uuConsole.deleteCustomSize('my-size');
```

> installSize(size1, [size2, size3...])

Install other built-in sizes.

```js
import uuSizes from 'uu-console/dist/size/size.esm.js';

// install all sizes.
uuConsole.installSize(uuConsole.toAry(uuSizes));

// or just install part of sizes. Notice size mini is default size, not in uuSizes.
const { micro, medium } = uuSizes;
uuConsole.installTheme(micro, medium);
```

> create()

Generate initial uu-console instance, so you can set different theme and size in the same time.

```js
const uu2 = uuConsole.create();
uu2.log('Hello', 'UU-Console');
```

> clone()

Clone current uu-console instance, so you can set different theme and size in the same time.

```js
const uu2 = uuConsole.clone();
uu2.useTheme('No606').useSize('mini').log('Clone', 'UU');
```

> toAry(Object)

Transform object's value to array

```js
const ary = uuConsole.toAry({ a: 1, b: 2 });
// ary = [1, 2]
```
