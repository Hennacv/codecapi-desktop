import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Announcement } from 'renderer/utils/types';
import {
  AnnouncementCardContent,
  AnnouncementCardDescription,
  AnnouncementCardTitle,
  AnnouncementCardVariants,
  AnnouncementCardPhotoVariants,
} from './announcement-card-styles.css';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface AnnouncementCardProps {
  announcement: Announcement;
  refetch: () => void;
  details?: boolean;
}

const AnnouncementCard = ({
  announcement,
  refetch,
  details = false,
}: AnnouncementCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const onPressCard = (announcement: Announcement) => {
    navigate(`/announcements/${announcement.id}`);
  };

  return (
    <div
      style={{ backgroundImage: `url("${AWS_ACCESS_URL + announcement.image}")` }}
      className={
        announcement.image
          ? classNames(AnnouncementCardPhotoVariants.default, {
              [AnnouncementCardPhotoVariants.defaultHover]: !details,
            })
          : classNames(AnnouncementCardVariants.default, {
              [AnnouncementCardVariants.defaultHover]: !details,
            })
      }
      onClick={() => onPressCard(announcement)}
    >
      {announcement.type === 'general' && (
        <div className={AnnouncementCardContent}>
          <span className={AnnouncementCardTitle}>{announcement.title}</span>
          <DynamicBlocksRead blocks={announcement.blocks} />
        </div>
      )}
      {announcement.type === 'event' && (
        <div className={AnnouncementCardContent}>
          <span className={AnnouncementCardTitle}>{announcement.title}</span>
          <span className={AnnouncementCardDescription}>
            {t('common.date')}: {announcement.date} {t('common.at')} {announcement.time}
          </span>
          {announcement.location && (
            <span className={AnnouncementCardDescription}>
              {t('common.location')}: {announcement.location}
            </span>
          )}
          {details && <DynamicBlocksRead blocks={announcement.blocks} />}
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;
