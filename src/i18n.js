import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      hello: "Hello",
    },
  },
  fr: {
    translation: {
      hello: "Bonjour",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
