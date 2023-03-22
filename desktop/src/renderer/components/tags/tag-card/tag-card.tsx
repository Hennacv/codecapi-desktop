import { TagColorBlob, TagIconVariants, TagCardVariants } from './tag-card-styles.css';
import { RiAddFill } from 'react-icons/ri';

interface TagCardProps {
  title: string;
  color: string;
  variant: keyof typeof TagCardVariants;
  icon?: 'add' | 'delete';
}

const TagCard = ({ title, color, variant, icon }: TagCardProps) => {
  return (
    <div className={TagCardVariants[variant]}>
      <span className={TagColorBlob} style={{"backgroundColor": color}}></span>
      {title}
      {icon ? 
        <RiAddFill className={icon === 'add' ? TagIconVariants.add : TagIconVariants.remove} />
      :
        null
      }
    </div>
  );
}
export default TagCard;