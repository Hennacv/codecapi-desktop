import { TagColorBlob, TagIcon, TagVariantsStyle } from './tag-styles.css';

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
        <span className={icon === 'add' ? TagIcon.add : TagIcon.delete}>+</span>
      </div>
    );
  }
  export default TagCard;