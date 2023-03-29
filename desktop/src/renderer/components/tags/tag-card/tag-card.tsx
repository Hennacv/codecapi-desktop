import { TagColorBlob, TagCardVariants } from './tag-card-styles.css';
import { ReactNode } from 'react';

interface TagCardProps {
  title: string;
  children?: ReactNode;
  color: string;
  variant: keyof typeof TagCardVariants;
}

const TagCard = ({ title, children, color, variant }: TagCardProps) => {
  return (
    <div className={TagCardVariants[variant]}>
      <span className={TagColorBlob} style={{ backgroundColor: color }}></span>
      {title}
      {children}
    </div>
  );
};
export default TagCard;
