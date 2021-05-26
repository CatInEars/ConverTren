import { pieDataExample } from "../other/pieDataExample";

export const initialState: IState = {
  localization: 'rus',
  currency1: 'RUB',
  currency2: 'USD',
  currencyList: [],
  statsAsw: [],
  timerNeed: true,
  sortedAnswers: [...pieDataExample]
}