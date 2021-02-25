interface IState {
  localization: ILanguage
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
  [propName: string]: string;
};