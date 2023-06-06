import { Tag } from 'renderer/utils/types';
import {
  UserSkillsContainer,
  UserSkillsHeader,
  UserSkillsTags,
} from './user-skills-styles.css';
import { useTranslation } from 'react-i18next';
import TagCard from 'renderer/components/tags/tag-card/tag-card';

interface SkillsProp {
  skills: Tag[];
}

const UserSkills = ({ skills }: SkillsProp) => {
  const {t} = useTranslation();
  return (
    <div className={UserSkillsContainer}>
      <label className={UserSkillsHeader}>{t('user.profile.title.tags')}:</label>
      <div className={UserSkillsTags}>
        {skills.map((tag: Tag) => (
          <TagCard
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="default"
          />
        ))}
      </div>
    </div>
  );
};

export default UserSkills;
