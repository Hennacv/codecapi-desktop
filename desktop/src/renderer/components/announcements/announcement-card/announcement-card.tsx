import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Announcement } from 'renderer/utils/types';
import {
  AnnouncementCardContent,
  AnnouncementCardTitle,
  AnnouncementCardVariants,
} from './announcement-card-styles.css';
import classNames from 'classnames';

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
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const onPressCard = (announcement: Announcement) => {
    navigate(`/announcements/${announcement.id}`);
  };

  return (
    <div
      className={classNames(AnnouncementCardVariants.default, {
        [AnnouncementCardVariants.defaultHover]: !details,
      })}
      onClick={() => onPressCard(announcement)}
    >
      <div className={AnnouncementCardContent}>
        <span className={AnnouncementCardTitle}>{announcement.title}</span>
        <DynamicBlocksRead blocks={announcement.blocks} />
      </div>
    </div>
  );
};

export default AnnouncementCard;
