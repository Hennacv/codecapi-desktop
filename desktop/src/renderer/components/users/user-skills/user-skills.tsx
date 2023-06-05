import { Tag } from 'renderer/utils/types';
import {
  UserSkillsContainer,
  UserSkillsHeader,
  UserSkillsTags,
} from './user-skills-styles.css';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import { useTranslation } from 'react-i18next';

interface SkillsProp {
  skills: Tag[];
}

const UserSkills = ({ skills }: SkillsProp) => {
  const {t} = useTranslation();
  return (
    <div className={UserSkillsContainer}>
      <label className={UserSkillsHeader}>{t('userProfile.information.tags')}:</label>
      <div className={UserSkillsTags}>
        {skills.map((tag: Tag) => (
          <TagButton
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => void 0}
          />
        ))}
      </div>
    </div>
  );
};

export default UserSkills;
