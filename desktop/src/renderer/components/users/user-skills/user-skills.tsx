import { Tag } from 'renderer/utils/types';
import {
  UserSkillsContainer,
  UserSkillsHeader,
  UserSkillsTags,
} from './user-skills-styles.css';
import TagButton from 'renderer/components/tags/tag-button/tag-button';

interface SkillsProp {
  skills: Tag[];
}

const UserSkills = ({ skills }: SkillsProp) => {
  return (
    <div className={UserSkillsContainer}>
      <label className={UserSkillsHeader}>Skills</label>
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
