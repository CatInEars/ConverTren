import { LIGHT, LIGHT_INPUT_COLOR, DARK_INPUT_COLOR } from '../../common/themes';

export function getBGCInputWithTheme(theme: ITheme): string {
  return theme === LIGHT ? DARK_INPUT_COLOR :  LIGHT_INPUT_COLOR;
}