import { useTranslation } from 'react-i18next';

import Storage from './tools/Storage';

import Header from './components/Header';

const App = () => {
  const { t, i18n } = useTranslation();

  const saveLang = (lang) => {
    Storage.setData('language', { key: lang });

    i18n.changeLanguage(lang);
  };

  return (
    <div className='site'>
      <Header />
      <div className='content'>
        <h1>{t('changeLanguage')}</h1>
        <br />
        <button className='button normal white' type='button' onClick={() => saveLang('tr')}>
          TR
        </button>
        &nbsp; &nbsp;
        <button className='button normal white' type='button' onClick={() => saveLang('en')}>
          EN
        </button>
      </div>
    </div>
  );
};

export default App;
