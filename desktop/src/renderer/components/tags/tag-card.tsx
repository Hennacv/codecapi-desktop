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
        {icon === 'add' ?
          <span className={TagIcon}>+</span>
          : icon === 'delete' ?
          <span className={TagIcon}>x</span>
          : null
        }
      </div>
    );
  }
  export default TagCard;