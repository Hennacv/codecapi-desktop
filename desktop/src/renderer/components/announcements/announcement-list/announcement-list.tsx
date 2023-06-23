import IconAdd from 'assets/icons/icon-add';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/button';
import { Announcement } from 'renderer/utils/types';
import { useGetAnnouncements } from 'renderer/hooks/use-get-announcements';
import AnnouncementCard from '../announcement-card/announcement-card';
import {
  AnnouncementListContainer,
  NewAnnouncementButtonPosition,
} from './announcement-list-styles.css';

const AnnouncementList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data = [], refetch } = useGetAnnouncements();

  const onNewTrick = () => {
    navigate('/announcements/new');
  };

  return (
    <>
      <div className={NewAnnouncementButtonPosition}>
        <Button type="button" variant="small" onClick={() => onNewTrick()}>
          {t('announcement.new.button.navigate')}
          <IconAdd variant={'small'} />
        </Button>
      </div>
      <div className={AnnouncementListContainer}>
        {data.map((announcement: Announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            refetch={refetch}
          />
        ))}
      </div>
    </>
  );
};

export default AnnouncementList;
