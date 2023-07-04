import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'renderer/components/ui/button/button';
import { useGetAnnouncement } from 'renderer/hooks/use-get-announcement';
import AnnouncementForm from '../announcement-form/announcement-form';
import {
  AnnouncementEditAllButtons,
  AnnouncementEditContainer,
} from './announcement-edit-styles.css';
import {
  AnnouncementFormContainer,
  AnnouncementFormDescription,
  AnnouncementFormHeader,
  AnnouncementFormTitle,
} from '../announcement-form/announcement-form-styles.css';

const AnnouncementEdit = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useGetAnnouncement(Number(id));
  const navigate = useNavigate();
  if (!data) {
    return null;
  }

  return (
    <div className={AnnouncementEditContainer}>
      <div className={AnnouncementEditAllButtons}>
        <Button
          text={t('button.back')}
          type="button"
          variant="small"
          onClick={() => navigate(`/announcements`)}
        />
      </div>
      <div className={AnnouncementFormContainer}>
        <header className={AnnouncementFormHeader}>
          <h1 className={AnnouncementFormTitle}>
            {t('announcement.edit.page.title')}
          </h1>
          <p className={AnnouncementFormDescription}>
            {t('announcement.edit.page.description')}
          </p>
        </header>
        <AnnouncementForm
          title={data.title}
          blocks={data.blocks}
          id={data.id}
          isEditing={true}
          type={data.type}
          date={data.date}
          time={data.time}
          location={data.location}
          image={data.image}
        />
      </div>
    </div>
  );
};

export default AnnouncementEdit;
