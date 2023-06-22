import { useTranslation } from 'react-i18next';
import AnnouncementForm from '../announcement-form/announcement-form';
import { AnnouncementFormContainer, AnnouncementFormDescription, AnnouncementFormHeader, AnnouncementFormTitle } from '../announcement-form/announcement-form-styles.css';

const NewAnnouncement = () => {
  const { t } = useTranslation();
  return (
    <div className={AnnouncementFormContainer}>
      <header className={AnnouncementFormHeader}>
        <h1 className={AnnouncementFormTitle}>
          {t('announcement.new.page.title')}
        </h1>
        <p className={AnnouncementFormDescription}>
          {t('announcement.new.page.description')}
        </p>
      </header>
      <AnnouncementForm blocks={[]} title="" />
    </div>
  );
};

export default NewAnnouncement;
