const format = (key: string): string => {
  return key.replace(/[A-Z]/g, p => '-' + p.toLowerCase());
};

export const transformStyleObjToString = (styleObj: Record<string, any>): string => {
  const str = Object.keys(styleObj).reduce((acc, cur) => {
    return `${acc}${format(cur)}:${styleObj[cur]};`;
  }, ';');
  return str.slice(1);
};
