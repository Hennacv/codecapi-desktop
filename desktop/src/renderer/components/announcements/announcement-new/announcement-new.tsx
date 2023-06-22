import { useTranslation } from 'react-i18next';
import {
  NewAnnouncementContainer,
  NewAnnouncementDescription,
  NewAnnouncementHeader,
  NewAnnouncementTitle,
} from './announcement-new-styles.css';
import AnnouncementForm from '../announcement-form/announcement-form';

const NewAnnouncement = () => {
  const { t } = useTranslation();
  return (
    <div className={NewAnnouncementContainer}>
      <header className={NewAnnouncementHeader}>
        <h1 className={NewAnnouncementTitle}>
          {t('announcement.new.page.title')}
        </h1>
        <p className={NewAnnouncementDescription}>
          {t('announcement.new.page.description')}
        </p>
      </header>
      <AnnouncementForm blocks={[]} title="" />
    </div>
  );
};

export default NewAnnouncement;
