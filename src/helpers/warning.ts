const PERFIX_ERROR = '[uu-console error]:';
const PERFIX_INFO = '[uu-console info]:';

const warning = (flag: boolean, msg: string): void => {
  if (!flag) {
    const content = `${PERFIX_ERROR} ${msg}`;
    throw new Error(content);
  }
};

const info = (flag: boolean, msg: string): void => {
  if (!flag) {
    const content = `${PERFIX_INFO} ${msg}`;
    if (typeof console !== 'undefined') {
      console.log(content);
    }
  }
};

export { warning, info };
