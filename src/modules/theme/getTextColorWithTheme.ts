import { LIGHT, LIGHT_TEXT_COLOR, DARK_TEXT_COLOR } from '../../common/themes';

export function getTextColorWithTheme(theme: ITheme): string {
  return theme === LIGHT ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR;
}