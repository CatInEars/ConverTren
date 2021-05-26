import { pieDataExample } from "../other/pieDataExample";
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

    const newStateAsw = [
      ...state.statsAsw,
      action.procent
    ];

    const pieData = [...state.sortedAnswers];

    if (newStateAsw[newStateAsw.length - 1] >= 98) {
      pieData[0].value++;
    } else if (newStateAsw[newStateAsw.length - 1] > 80) {
      pieData[1].value++;
    } else if (newStateAsw[newStateAsw.length - 1] > 60) {
      pieData[2].value++;
    } else {
      pieData[3].value++;
    }
    
    return {
      ...state,
      statsAsw: newStateAsw,
      sortedAnswers: pieData
    }
  } else if (action.type === 'CHANGE_TIMER_NEED') {
    return {
      ...state,
      timerNeed: action.value
    }
  }

  return state;
}