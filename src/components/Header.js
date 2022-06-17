import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Header = memo(() => {
  const { t } = useTranslation();

  return (
    <header>
      <p>{t('siteHeader')}</p>
    </header>
  );
});

export default Header;
