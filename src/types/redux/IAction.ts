type IAction = ILanguageAction;

interface ILanguageAction {
  type: 'CHANGE_LOCALIZATION',
  languageSet: ILanguage
}