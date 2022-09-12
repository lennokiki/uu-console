import type {
  TSize,
  TSizeItem,
  TLocalSizeItem,
  TSizeItemProps,
  TTheme,
  TThemeItem,
  TLocalThemeItem,
  TThemeItemProps,
  TColor,
  TColorItem,
} from '@/types';
import { warning } from '@/helpers/warning';
import { mini } from '@/data/size/modules';
import { No301 } from '@/data/theme/modules/No3';

class Store {
  protected sizes: TSize = {};
  protected themes: TTheme = {};
  // protected colors: TColor = {};

  constructor() {
    this.installSize([mini]);
    this.installTheme([No301]);
  }

  public installSize(sizes: TLocalSizeItem[]): void {
    sizes.forEach(size => {
      const { name, props } = size;
      try {
        this.setSize(name, props, false);
      } catch (err) {}
    });
  }

  public installTheme(themes: TLocalThemeItem[]): void {
    themes.forEach(theme => {
      const { name, props } = theme;
      try {
        this.setTheme(name, props, false);
      } catch (err) {}
    });
  }

  // public getColors(): TColor {
  //   return this.colors;
  // }

  // public getColor(name: string): TColorItem | void {
  //   return this.colors[name];
  // }

  // public setColor(name: string, color: string, custom?: boolean): void {
  //   if (!!this.colors[name]) {
  //     warning(false, `color name "${name}" has been setted!`);
  //   }
  //   this.colors[name] = {
  //     name,
  //     color,
  //     custom: !!custom,
  //   };
  // }

  // public delColor(name: string): void {
  //   const cur = this.colors[name];
  //   if (cur) {
  //     warning(cur.custom, `color name "${name}" is not custom, cannot be deleted!`);
  //     delete this.sizes[name];
  //   } else {
  //     warning(false, `color name "${name}" has not setted!`);
  //   }
  // }

  public getSizes(): TSize {
    return this.sizes;
  }

  public getSize(name: string): TSizeItem | void {
    return this.sizes[name];
  }

  public setSize(name: string, props: TSizeItemProps[], custom?: boolean): void {
    if (!!this.sizes[name]) {
      warning(false, `size name "${name}" has been setted!`);
    }
    this.sizes[name] = {
      name,
      props,
      custom: !!custom,
    };
  }

  public delSize(name: string): void {
    const cur = this.sizes[name];
    if (cur) {
      warning(cur.custom, `size name "${name}" is not custom, cannot be deleted!`);
      delete this.sizes[name];
    } else {
      warning(false, `size name "${name}" has not setted!`);
    }
  }

  public getThemes(): TTheme {
    return this.themes;
  }

  public getTheme(name: string): TThemeItem | void {
    return this.themes[name];
  }

  public setTheme(name: string, props: TThemeItemProps[], custom?: boolean): void {
    if (!!this.themes[name]) {
      warning(false, `theme name "${name}" has been setted!`);
    }
    this.themes[name] = {
      name,
      props,
      custom: !!custom,
    };
  }

  public delTheme(name: string): void {
    const cur = this.themes[name];
    if (cur) {
      warning(cur.custom, `theme name "${name}" is not custom, cannot be deleted!`);
      delete this.themes[name];
    } else {
      warning(false, `theme name "${name}" has not setted!`);
    }
  }
}

const store = new Store();

export default store;
