interface IState {
  localization: ILanguage,
  currency1: ICurrency,
  currency2: ICurrency
}

type ILanguage = 'rus' | 'eng';

type ICurrency = string