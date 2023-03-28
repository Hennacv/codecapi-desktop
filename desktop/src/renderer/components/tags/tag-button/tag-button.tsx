import { TagCardVariants } from '../tag-card/tag-card-styles.css';
import { tagButton } from './tag-button-styles.css';
import { ReactNode } from 'react';

import TagCard from '../tag-card/tag-card';

interface TagButtonProps {
  title: string;
  children?: ReactNode;
  color: string;
  variant: keyof typeof TagCardVariants;
  icon?: 'add' | 'delete';
  onClick: () => void;
}

const TagButton = ({
  title,
  children,
  color,
  variant,
  icon,
  onClick,
}: TagButtonProps) => {
  return (
    <button type="button" className={tagButton} onClick={onClick}>
      <TagCard title={title} color={color} variant={variant} icon={icon}>
        {children}
      </TagCard>
    </button>
  );
};

export default TagButton;
