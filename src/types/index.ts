import EnumTheme from './enums/theme';
import EnumSize from './enums/size';

export { EnumSize, EnumTheme };

export type TColorItem = {
  name: string;
  color: string;
  custom: boolean;
};

export type TLocalColorItem = Omit<TColorItem, 'custom'>;

export type TColor = Record<string, TColorItem>;

export type TSizeItemProps =
  | Partial<{
      fontSize: string;
      padding: string;
      [styleProperty: string]: string | number;
    }>
  | string;

export type TSizeItem = {
  name: EnumSize | string;
  props: TSizeItemProps[];
  custom: boolean;
};

export type TLocalSizeItem = Omit<TSizeItem, 'custom'>;

export type TSize = Record<string, TSizeItem>;

export type TThemeItemProps =
  | Partial<{
      color: string;
      fontFamily: string;
      fontWeight: string;
      fontStyle: string;
      textShadow: string;
      textDecoration: string;
      backgroundColor: string;
      background: string;
      border: string;
      bordertop: string;
      borderRight: string;
      borderBottom: string;
      borderLeft: string;
      borderRadius: string;
      borderTopLeftRadius: string;
      borderTopRightRadius: string;
      borderBottomRightRadius: string;
      borderBottomLeftRadius: string;
      [styleProperty: string]: string | number;
    }>
  | string;

export type TThemeItem = {
  name: EnumTheme | string;
  props: TThemeItemProps[];
  custom: boolean;
};

export type TLocalThemeItem = Omit<TThemeItem, 'custom'>;

export type TTheme = Record<string, TThemeItem>;
