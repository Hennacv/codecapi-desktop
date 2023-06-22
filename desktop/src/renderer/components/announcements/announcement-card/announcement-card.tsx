import dayjs from 'renderer/utils/dayjs';
import DynamicBlocksRead from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-read/dynamic-blocks-read';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Announcement } from 'renderer/utils/types';
import {
  AnnouncementCardContainer,
  AnnouncementCardContent,
  AnnouncementCardHeader,
  AnnouncementCardHeaderInfo,
  AnnouncementCardTitle,
} from './announcement-card-styles.css';

interface AnnouncementCardProps {
  announcement: Announcement;
  refetch: () => void;
}

const AnnouncementCard = ({ announcement, refetch }: AnnouncementCardProps) => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={AnnouncementCardContainer}>
      <div className={AnnouncementCardHeader}>
        <div className={AnnouncementCardHeaderInfo}>
          {announcement.user.name}
          <span>-</span>
          {dayjs(announcement.createdAt).fromNow()}
        </div>
      </div>
      <div className={AnnouncementCardContent}>
        <span className={AnnouncementCardTitle}>{announcement.title}</span>
        <DynamicBlocksRead blocks={announcement.blocks} />
      </div>
    </div>
  );
};

export default AnnouncementCard;
