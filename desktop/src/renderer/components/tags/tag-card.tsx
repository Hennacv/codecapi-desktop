import { tagColor, TagVariantsStyle} from './tag-styles.css';

interface TagCardProps {
    title: string;
    color: string;
    isSmall: boolean;
}

function TagCard({ title, color, isSmall }: TagCardProps) {
    return (
      <div className={isSmall ? TagVariantsStyle.small : TagVariantsStyle.default}>
        <div className={tagColor} style={{"backgroundColor": color}}></div>
        {title}
      </div>
    );
  }
  export default TagCard;