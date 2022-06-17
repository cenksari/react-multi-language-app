import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Storage from '../tools/Storage';
import tr from './tr.json';
import en from './en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  // eslint-disable-next-line consistent-return
  detect: async (callback) => {
    const language = await Storage.getData('language');

    if (!language) {
      return callback('tr');
    }

    callback(language.key);
  },
  init: () => {},
  cacheUserLanguage: (lang) => {
    Storage.setData('language', { key: lang });
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    compatibilityJSON: 'v3',
    resources: {
      tr,
      en,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
