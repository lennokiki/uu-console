import { TLocalThemeItem } from '@/types';
import No1 from './modules/No1';
import No2 from './modules/No2';
import No3 from './modules/No3';
import No4 from './modules/No4';
import No5 from './modules/No5';
import No6 from './modules/No6';
import No7 from './modules/No7';
import No8 from './modules/No8';
import No9 from './modules/No9';
import Nox from './modules/Nox';

const themes: Record<string, TLocalThemeItem> = Object.assign(
  {},
  No1,
  No2,
  No3,
  No4,
  No5,
  No6,
  No7,
  No8,
  No9,
  Nox
);

export default themes;
