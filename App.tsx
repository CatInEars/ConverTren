/*   
*                     CatInEars             
*       My GitHub: https://github.com/CatInEars
*/

import React from 'react';
import { Provider } from 'react-redux';
import { Main } from './src/index';
import { globalState } from './src/modules/store/globalState';

export default function App() {
  return (
    <Provider store={globalState}>
      <Main />
    </Provider>
  );
}