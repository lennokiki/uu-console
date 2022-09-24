# 安装

## 安装依赖

可分为两种模式引入，使用 ESM 或者 UMD 通过`<script>`标签的方式引入

### ESM

npm

```js
npm i uu-console -S
```

or yarn

```js
yarn add uu-console
```

or pnpm

```js
pnpm add uu-console
```

### UMD

引入 dist 目录下的 uu-console.umd.js 下载到本地或者使用 cdn

jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/uu-console/dist/uu-console.umd.js"></script>
```

unpkg CDN:

```html
<script src="https://unpkg.com/uu-console/dist/uu-console.umd.js"></script>
```

## 使用

### ESM 方式，引入 uu-console 和 外置的主题、尺寸

```js
import uuConsole from 'uu-console';
import uuThemes from 'uu-console/theme/theme.esm.js';
import uuSizes from 'uu-console/size/size.esm.js';
```

### UMD 方式，引入 uu-console 和 外置的主题、尺寸

```html
<script src="https://cdn.jsdelivr.net/npm/uu-console/dist/uu-console.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uu-console/dist/theme/theme.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uu-console/dist/size/size.umd.js"></script>
```
