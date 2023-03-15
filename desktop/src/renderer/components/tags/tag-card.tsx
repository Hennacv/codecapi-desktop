import { tagColor, TagVariantsStyle} from './tag-styles.css';

interface TagCardProps {
    title: string;
    color: string;
    variant: keyof typeof TagVariantsStyle;
}

function TagCard({ title, color, variant }: TagCardProps) {
    return (
      <div className={TagVariantsStyle[variant]}>
        <span className={tagColor} style={{"backgroundColor": color}}></span>
        {title}
      </div>
    );
  }
  export default TagCard;