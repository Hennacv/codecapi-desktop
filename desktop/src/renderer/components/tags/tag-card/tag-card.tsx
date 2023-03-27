import {
  TagColorBlob,
  TagIconVariants,
  TagCardVariants,
} from './tag-card-styles.css';
import { RiAddFill } from 'react-icons/ri';
import IconAdd from 'assets/icons/icon-add';
import IconRemove from 'assets/icons/icon-remove';

interface TagCardProps {
  title: string;
  color: string;
  variant: keyof typeof TagCardVariants;
  icon?: 'add' | 'delete';
}

const TagCard = ({ title, color, variant, icon }: TagCardProps) => {
  return (
    <div className={TagCardVariants[variant]}>
      <span className={TagColorBlob} style={{ backgroundColor: color }}></span>
      {title}
      {icon === 'add' ? (
        <IconAdd variant="extraSmall" />
      ) : (
        <IconRemove variant="extraSmall" />
      )}
    </div>
  );
};
export default TagCard;
