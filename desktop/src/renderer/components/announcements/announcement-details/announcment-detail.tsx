import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../ui/button/button';
import { useTranslation } from 'react-i18next';
import AnnouncementCard from '../announcement-card/announcement-card';
import { useGetAnnouncement } from 'renderer/hooks/use-get-announcement';
import AnnouncementDelete from '../announcement-delete/announcement-delete';
import { useState } from 'react';
import IconDelete from 'assets/icons/icon-delete';
import IconEdit from 'assets/icons/icon-edit';
import { AnnouncementDetailsButtonContainer, AnnouncementDetailsContainer } from './announcement-detail-styles.css';

const AnnouncementDetail = () => {
  const {t} = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: announcement, refetch } = useGetAnnouncement(Number(id));
  const [isShown, setIsShown] = useState(false);

  if (!announcement) {
    return null;
  }

  return (
    <div className={AnnouncementDetailsContainer}>
      <div className={AnnouncementDetailsButtonContainer.main}>
        <Button
          text={t('button.back')}
          type="button"
          variant="small"
          onClick={() => navigate('/announcements')}
        />
          <div className={AnnouncementDetailsButtonContainer.side}>
            <Button
              type="button"
              variant="smallSquare"
              onClick={() => navigate(`/announcements/edit/${id}`)}
            >
              <IconEdit variant="default" />
            </Button>
            <Button
              type="button"
              variant="smallSquareDelete"
              onClick={() => setIsShown(true)}
            >
              <IconDelete variant="default" />
            </Button>
            <AnnouncementDelete
              id={id}
              isShown={isShown}
              onClose={() => setIsShown(false)}
            />
          </div>
      </div>
      <AnnouncementCard announcement={announcement} details refetch={refetch} />
    </div>
  );
};

export default AnnouncementDetail;