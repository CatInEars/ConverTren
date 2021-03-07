import { initialState } from "./initialState";

export function rootReducer(state = initialState, action: IAction): IState {
  if (action.type === 'CHANGE_LOCALIZATION') {
    return {
      ...state,
      localization: action.languageSet
    }
  } else if (action.type === 'CURRENCY_LOADED' ) {
    return {
      ...state,
      currencyList: action.currency
    }
  }

  return state;
}