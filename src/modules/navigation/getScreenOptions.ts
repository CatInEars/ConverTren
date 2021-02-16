import { localization } from "../localization/localization";
import { tabIconsObj } from "./TabIconsObj";

export function getScreenOptions(name: string, lang: ILanguage) {
  return {
    title: localization.navigation[name].title[lang],
    tabBarIcon: tabIconsObj[name]
  }
}