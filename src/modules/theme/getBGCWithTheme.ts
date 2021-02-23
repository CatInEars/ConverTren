import { LIGHT, LIGHT_BGC, DARK_BGC } from '../../common/themes';

export function getBGCWithTheme(theme: ITheme): string {
  return theme === LIGHT ? LIGHT_BGC : DARK_BGC;
}