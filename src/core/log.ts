import { transformStyleObjToString } from '@/helpers/utils';

type TInfos = Array<{
  text: string;
  style: string | Record<string, any>;
  sizeProps: string | Record<string, any>;
  themeProps: string | Record<string, any>;
}>;

const endOfSemi = /;$/;

const isNotEmpty = (tar: string | Record<string, any>): boolean => {
  return (
    (typeof tar === 'string' && tar !== '') ||
    (typeof tar === 'object' && !!Object.keys(tar).length)
  );
};

const addEndSemi = (style: string): string => {
  return style && !endOfSemi.test(style) ? style + ';' : style;
};

const logText = (infos: TInfos): { content: string; styles: string[] } => {
  let content = '';
  let styles: string[] = [];
  if (typeof console !== 'undefined') {
    let i = 0;
    const len = infos.length;
    for (; i < len; i += 1) {
      const { text, style, sizeProps, themeProps } = infos[i];
      content += `%c${text}`;
      let styleItem: string = '';

      if (isNotEmpty(style)) {
        styleItem = typeof style === 'string' ? style : transformStyleObjToString(style);
      } else {
        let themeStyle = isNotEmpty(themeProps)
          ? typeof themeProps === 'string'
            ? themeProps
            : transformStyleObjToString(themeProps)
          : '';

        let sizeStyle = isNotEmpty(sizeProps)
          ? typeof sizeProps === 'string'
            ? sizeProps
            : transformStyleObjToString(sizeProps)
          : '';

        styleItem = addEndSemi(sizeStyle) + addEndSemi(themeStyle);
      }

      styles.push(styleItem);
    }
    console.log(content, ...styles);
  }
  return { content, styles };
};

export { logText };
