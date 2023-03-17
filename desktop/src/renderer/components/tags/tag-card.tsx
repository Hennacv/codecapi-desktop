import { TagColorBlob, TagIcon, TagVariantsStyle } from './tag-styles.css';
import { RiAddFill } from 'react-icons/ri';

interface TagCardProps {
    title: string;
    color: string;
    variant: keyof typeof TagVariantsStyle;
    icon?: 'add' | 'delete';
}

function TagCard({ title, color, variant, icon }: TagCardProps) {
    return (
      <div className={TagVariantsStyle[variant]}>
        <span className={TagColorBlob} style={{"backgroundColor": color}}></span>
        {title}
        <RiAddFill className={icon === 'add' ? TagIcon.add : TagIcon.delete} />
      </div>
    );
  }
  export default TagCard;