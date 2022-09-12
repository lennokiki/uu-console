import {
  EnumSize,
  EnumTheme,
  TSizeItemProps,
  TThemeItemProps,
  TThemeItem,
  TTheme,
  TSizeItem,
  TSize,
  TLocalThemeItem,
  TLocalSizeItem,
} from '@/types';
import store from '@/store';
import { logText } from '@/core/log';
import { warning, info } from '@/helpers/warning';

type TOptions = {
  theme?: string;
  size?: string;
};

type TCustomItem =
  | {
      [styleProperty: string]: string | number;
    }
  | string;

type TLogTextOptions = {
  text: string;
  theme?: string;
  size?: string;
  style?: Record<string, string | number> | string;
};

type TLastLog = {
  content: string;
  styles: string[];
};

class UUConsole {
  public theme: string;
  public themeOnce: string | null;
  public themeSort: number[];
  public themeSortOnce: number[] | null;
  public size: string;
  public sizeOnce: string | null;
  public sizeSort: number[];
  public sizeSortOnce: number[] | null;
  public lastLogText: TLastLog;

  constructor(options?: TOptions) {
    const { theme = EnumTheme.No301, size = EnumSize.mini } = options || {};
    this.theme = theme;
    this.themeOnce = null;
    this.themeSort = [0, 1, 2];
    this.themeSortOnce = null;
    this.size = size;
    this.sizeOnce = null;
    this.sizeSort = [0, 1, 2];
    this.sizeSortOnce = null;
    this.lastLogText = {
      content: '',
      styles: [],
    };
  }

  public getSize(name: string): TSizeItem | void {
    return store.getSize(name);
  }

  public getSizes(): TSize {
    return store.getSizes();
  }

  public useSize(this: any, name: string): this {
    const hasSize = !!store.getSize(name);
    info(hasSize, `notice! size name "${name}" has not setted`);
    if (hasSize) {
      this.size = name;
    }
    return this;
  }

  public useSizeOnce(this: any, name: string): this {
    const hasSize = !!store.getSize(name);
    info(hasSize, `notice! size name "${name}" has not setted`);
    if (hasSize) {
      this.sizeOnce = name;
    }
    return this;
  }

  public useSizeSort(this: any, sort: number[]): this {
    this.sizeSort = sort;
    return this;
  }

  public useSizeSortOnce(this: any, sort: number[]): this {
    this.sizeSortOnce = sort;
    return this;
  }

  public setCustomSize(this: any, name: string, sizes: TCustomItem[]): this {
    warning(!!name, 'size name is required!');
    store.setSize(name, sizes, true);
    return this;
  }

  public deleteCustomSize(this: any, name: string): this {
    store.delSize(name);
    return this;
  }

  public getTheme(name: string): TThemeItem | void {
    return store.getTheme(name);
  }

  public getThemes(): TTheme {
    return store.getThemes();
  }

  public useTheme(this: any, name: string): this {
    const hasName = !!store.getTheme(name);
    info(hasName, `notice! theme name "${name}" has not setted!`);
    if (hasName) {
      this.theme = name;
    }
    return this;
  }

  public useThemeOnce(this: any, name: string): this {
    const hasName = !!store.getTheme(name);
    info(hasName, `notice! theme name "${name}" has not setted!`);
    if (hasName) {
      this.themeOnce = name;
    }
    return this;
  }

  public useThemeSort(this: any, sort: number[]): this {
    this.themeSort = sort;
    return this;
  }

  public useThemeSortOnce(this: any, sort: number[]): this {
    this.themeSortOnce = sort;
    return this;
  }

  public setCustomTheme(this: any, name: string, themes: TCustomItem[]): this {
    warning(!!name, 'theme name is required!');
    store.setTheme(name, themes, true);
    return this;
  }

  public deleteCustomTheme(this: any, name: string): this {
    store.delTheme(name);
    return this;
  }

  public log(this: any, ...combineText: Array<string | TLogTextOptions>): this {
    const infos = [];
    let i = 0;
    const text = combineText.flat();
    const len = text.length;
    for (; i < len; i += 1) {
      const cur = text[i];
      const isString = typeof cur === 'string';

      const themeName = isString ? this._getThemeName() : cur.theme ?? this._getThemeName();
      const sizeName = isString ? this._getSizeName() : cur.size ?? this._getSizeName();
      const themeItemProps: TThemeItemProps = this._getThemeItemProps(themeName, i);
      const sizeItemProps: TSizeItemProps = this._getSizeItemProps(sizeName, i);
      infos.push({
        text: isString ? cur : cur.text,
        style: isString ? '' : cur.style ? cur.style : '',
        sizeProps: sizeItemProps,
        themeProps: themeItemProps,
      });
    }

    this.sizeOnce = null;
    this.themeOnce = null;
    this.themeSortOnce = null;
    this.sizeSortOnce = null;

    this.lastLogText = logText(infos);
    return this;
  }

  public installTheme(
    first: TLocalThemeItem | TLocalThemeItem[],
    ...themes: TLocalThemeItem[]
  ): void {
    const flatTheme = ([] as TLocalThemeItem[]).concat(first, themes).flat();
    store.installTheme(flatTheme);
  }

  public installSize(first: TLocalSizeItem | TLocalSizeItem[], ...sizes: TLocalSizeItem[]): void {
    const flatSize = ([] as TLocalThemeItem[]).concat(first, sizes).flat();
    store.installSize(flatSize);
  }

  private _getThemeName(): string {
    return this.themeOnce ?? this.theme;
  }

  private _getSizeName(): string {
    return this.sizeOnce ?? this.size;
  }

  private _getThemeItemProps(name: string, index: number = 0): TThemeItemProps {
    const themeItem = store.getTheme(name);
    if (themeItem) {
      const len = themeItem.props.length;
      let curIndex = index % len;
      if (this.themeSortOnce && typeof this.themeSortOnce[curIndex] === 'number') {
        curIndex = this.themeSortOnce[curIndex];
      } else if (this.themeSort && typeof this.themeSort[curIndex] === 'number') {
        curIndex = this.themeSort[curIndex];
      }
      return themeItem.props[curIndex] || '';
    }
    return '';
  }

  private _getSizeItemProps(name: string, index: number = 0): TSizeItemProps {
    const sizeItem = store.getSize(name);
    if (sizeItem) {
      const len = sizeItem.props.length;
      let curIndex = index % len;
      if (this.sizeSortOnce && typeof this.sizeSortOnce[curIndex] === 'number') {
        curIndex = this.sizeSortOnce[curIndex];
      } else if (this.sizeSort && typeof this.sizeSort[curIndex] === 'number') {
        curIndex = this.sizeSort[curIndex];
      }
      return sizeItem.props[curIndex] || '';
    }
    return '';
  }

  // public draw(name: string): void {}

  public create() {
    return new UUConsole();
  }

  public clone(this: any) {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
  }

  public getClass() {
    return UUConsole;
  }

  public toAry(obj: Record<string, unknown>): unknown[] {
    return Object.entries(obj).map(item => item[1]);
  }
}

const uuConsole = new UUConsole();

export default uuConsole;
