import {createRoot} from "react-dom/client";
import {I18nextProvider} from "react-i18next"
import App from './App';

import global_ua from "./i18n/ua/global.json";
import global_en from "./i18n/en/global.json";
import i18next from "i18next";

i18next.init({
  interpolation: {escapeValue: false},
  lng: "ua",
  resources: {
    ua: {
      global: global_ua
    },
    en: {
      global: global_en
    }
  }
});

const container = document.querySelector('#root');
if (container) {
  const root = createRoot(container as Element);
  root.render(
    <I18nextProvider i18n={i18next}>
      <App/>
    </I18nextProvider>
  )
} else {
  console.error("Element with id 'root' not found");
}

