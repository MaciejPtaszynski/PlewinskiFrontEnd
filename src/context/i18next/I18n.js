import i18n from "i18next";
import {initReactI18next} from "react-i18next";


// Importing translation files

import translationEN from "./translations/en.json";
import translationPL from "./translations/pl.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pl", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;