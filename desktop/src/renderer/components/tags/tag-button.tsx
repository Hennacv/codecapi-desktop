import { tagButton, TagVariantsStyle} from './tag-styles.css';
import TagCard from './tag-card';

interface TagButtonProps {
    title: string;
    color: string;
    variant: keyof typeof TagVariantsStyle;
    icon?: 'add' | 'delete';
    onClick: () => void;
}

function TagButton({ title, color, variant, icon, onClick }: TagButtonProps) {
    return (
        <button type='button' className={tagButton} onClick={onClick}>
            <TagCard title={title} color={color} variant={variant} icon={icon} />
        </button>
    );
  }

  export default TagButton;