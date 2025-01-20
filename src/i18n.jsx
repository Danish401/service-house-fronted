// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import en from "./locales/en.json";
// import hi from "./locales/hi.json";

// i18n
//   .use(initReactI18next) // Pass the i18n instance to react-i18next
//   .init({
//     resources: {
//       en: {
//         translation: en, // Load English translations
//       },
//       hi: {
//         translation: hi, // Load Hindi translations
//       },
//     },
//     lng: "en", // Default language
//     fallbackLng: "en", // Fallback language
//     debug: true, // Enable debugging
//     interpolation: {
//       escapeValue: false, // React already escapes by default
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import hi from "./locales/hi.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true, // Enable debugging
  });

export default i18n;
