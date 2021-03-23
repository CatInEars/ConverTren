import { initialState } from "./initialState";

export function rootReducer(state = initialState, action: IAction): IState {
  if (action.type === 'CHANGE_LOCALIZATION') {
    return {
      ...state,
      localization: action.languageSet
    }
  } else if (action.type === 'CURRENCY_LOADED') {
    return {
      ...state,
      currencyList: action.currency
    }
  } else if (action.type === 'CURRENCY_SET') {
    const newState: any = {
      ...state
    }

    newState[`currency${action.payload.currencyListNumber}`] = action.payload.newCurrency;

    return newState
  } else if (action.type === 'SEND_PROCENT') {
    return {
      ...state,
      statsAsw: [
        ...state.statsAsw,
        action.procent
      ]
    }
  }

  return state;
}