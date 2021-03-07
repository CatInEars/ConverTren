type IAction = ILanguageAction | ICurrencyLoad;

interface ILanguageAction {
  type: 'CHANGE_LOCALIZATION',
  languageSet: ILanguage
}

interface ICurrencyLoad {
  type: 'CURRENCY_LOADED',
  currency: any
}