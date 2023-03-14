import { tagColor, TagVariantsStyle} from './tag-styles.css';

interface TagCardProps {
    title: string;
    color: string;
    isSmall: boolean;
}

function TagCard({ title, color, isSmall }: TagCardProps) {
    return (
      <div className={isSmall ? TagVariantsStyle.small : TagVariantsStyle.default}>
        <span className={tagColor} style={{"backgroundColor": color}}></span>
        {title}
      </div>
    );
  }
  export default TagCard;