interface IState {
  localization: ILanguage,
  currency1: ICurrency,
  currency2: ICurrency,
  currencyList: ICurrencyItem[]
}

type ILanguage = 'rus' | 'eng';

type ICurrency = string;

interface ICurrencyItem {
  CharCode: string,
  ID: string,
  Name: string,
  Nominal: number,
  NumCode: string,
  Previous: number,
  Value: number,
}