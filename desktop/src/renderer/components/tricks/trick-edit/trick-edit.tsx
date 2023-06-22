import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'renderer/components/ui/button/button';
import TrickForm from '../trick-form/trick-form';
import { useGetTrick } from 'renderer/hooks/use-get-trick';
import { TrickEditAllButtons, TrickEditContainer } from './trick-edit-styles.css';
import { TrickFormContainer, TrickFormDescription, TrickFormHeader, TrickFormTitle } from '../trick-form/trick-form-styles.css';

const TrickEdit = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useGetTrick(Number(id));
  const navigate = useNavigate();
  if (!data) {
    return null;
  }

  return (
    <div className={TrickEditContainer}>
      <div className={TrickEditAllButtons}>
        <Button
          text={t('button.back')}
          type="button"
          variant="small"
          onClick={() => navigate(`/tricks`)}
        />
      </div>

      <div className={TrickFormContainer}>
        <header className={TrickFormHeader}>
          <h1 className={TrickFormTitle}>{t('trick.edit.page.title')}</h1>
          <p className={TrickFormDescription}>{t('trick.edit.page.description')}</p>
        </header>
        <TrickForm
          title={data.title}
          blocks={data.blocks}
          id={data.id}
          isEditing={true}
        />
      </div>
    </div>
  );
};

export default TrickEdit;
