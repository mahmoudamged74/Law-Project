import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";

// قراءة اللغة المحفوظة من localStorage
const savedLanguage = localStorage.getItem("i18nextLng") || "ar";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: savedLanguage,          // استخدام اللغة المحفوظة
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// حفظ اللغة في localStorage عند تغييرها
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

// تعيين الاتجاه الأولي
document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
document.documentElement.lang = savedLanguage;

export default i18n;
