type IAction = ILanguageAction | ICurrencyLoad | ISetCurrency | ISendProcent;

interface ILanguageAction {
  type: 'CHANGE_LOCALIZATION',
  languageSet: ILanguage
}

interface ICurrencyLoad {
  type: 'CURRENCY_LOADED',
  currency: any
}

interface ISetCurrency {
  type: 'CURRENCY_SET',
  payload: {
    newCurrency: ICurrency,
    currencyListNumber: number
  }
}

interface ISendProcent {
  type: 'SEND_PROCENT',
  procents: number[]
}