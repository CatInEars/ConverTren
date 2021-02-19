type Theme = 'DARK' | 'LIGHT'

interface IState {
  localization: ILanguage,
  theme: Theme
}

type ILanguage = 'rus' | 'eng'

interface ILocalizationObj {
  navigation: {
    [propName: string]: {
      title: ILocalization
    }
  }
}

type ILocalization = {
  [propName in ILanguage]: string;
};