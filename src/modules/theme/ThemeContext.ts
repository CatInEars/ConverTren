import { createContext } from "react";
import { DARK } from "../../common/themes";

export const ThemeContext = createContext<IContextTheme>({
  theme: DARK,
  toggleTheme: () => {}
});