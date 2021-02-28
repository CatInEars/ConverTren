/*   
*                     CatInEars             
*       My GitHub: https://github.com/CatInEars
*/

import React, { useState, createContext, useContext, useEffect } from 'react';
import { Provider } from 'react-redux';
import { DARK, LIGHT } from './src/common/themes';
import { Main } from './src/index';
import { globalState } from './src/modules/store/globalState';
import { ThemeContext } from './src/modules/theme/ThemeContext';

export default function App() {
  const [theme, toggleTheme] = useState<ITheme>(LIGHT);
  const [context, setContext] = useState<IContextTheme>({
    theme,
    toggleTheme
  });

  useEffect(() => {
    setContext({
      theme,
      toggleTheme
    })
  }, [theme]);
  
  return (
    <Provider store={globalState}>
      <ThemeContext.Provider value={context}>
        <Main />
      </ThemeContext.Provider>
    </Provider>
  );
}