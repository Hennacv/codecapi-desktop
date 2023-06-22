import { useTranslation } from 'react-i18next';
import TrickForm from '../trick-form/trick-form';
import { TrickFormContainer, TrickFormDescription, TrickFormHeader, TrickFormTitle } from '../trick-form/trick-form-styles.css';


const NewTrick = () => {
  const { t } = useTranslation();

  return (
    <div className={TrickFormContainer}>
      <header className={TrickFormHeader}>
        <h1 className={TrickFormTitle}>{t('trick.new.page.title')}</h1>
        <p className={TrickFormDescription}>{t('trick.new.page.description')}</p>
      </header>
      <TrickForm blocks={[]} title=""/>
    </div>
  );
};

export default NewTrick;
