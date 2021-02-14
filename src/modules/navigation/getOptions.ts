import { localization } from "../localization/localization";

export function getLocalOptions(name: string, lang: ILanguage) {
  return {
    title: localization.navigation[name].title[lang]
  }
}