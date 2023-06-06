import { useParams } from 'react-router-dom';
import { useGetProfile } from 'renderer/hooks/use-get-profile';
import {
  ProfileFormContainer,
  ProfileFormDescription,
  ProfileFormHeader,
  ProfileFormItem,
  ProfileFormLabel,
  ProfileFormTitle,
  SkillHidden,
  SkillsContainer,
  SkillsList,
} from './user-edit-styles.css';
import InputText from 'renderer/components/ui/input-text/input-text';
import { useState } from 'react';
import { EditProfileDto, Tag, User } from 'renderer/utils/types';
import { useSelectedTags } from 'renderer/hooks/use-selected-tags';
import { useEditProfile } from 'renderer/hooks/use-edit-profile';
import Button from 'renderer/components/ui/button/button';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import IconRemove from 'assets/icons/icon-remove';
import IconAdd from 'assets/icons/icon-add';

const UserEditWrapper = () => {
  const { id } = useParams();
  const { data: profile } = useGetProfile(parseInt(id!));

  return (
    <>{!profile ? <p>loading</p> : <UserEdit user={profile.user} id={id!} />}</>
  );
};

interface EditProfileProps {
  user: User;
  id: string;
}

const UserEdit: React.FC<EditProfileProps> = ({ user, id }) => {
  const editProfile = useEditProfile(parseInt(id!));
  const [userProfile, setUserProfile] = useState<EditProfileDto>(user);

  const { addTag, deleteTag, tags, selectedTags } = useSelectedTags(user.tags);

  const addSkill = (tag: Tag) => {
    addTag(tag);
    updateProfileValue('tags', [...user.tags, { id: tag.id }]);
  };

  const deleteSkill = (tag: Tag) => {
    deleteTag(tag);

    const tempTag = userProfile.tags.filter((skill) => skill.id !== tag.id);
    updateProfileValue('tags', tempTag);
  };

  const updateProfileValue = (field: string, value: any) => {
    setUserProfile({
      ...userProfile,
      [field]: value,
    });
  };

  const onEdit = (
    userProfile: EditProfileDto,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (editProfile) {
      editProfile?.mutate(userProfile);
    }
  };

  return (
    <form className={ProfileFormContainer}>
      <header className={ProfileFormHeader}>
        <h1 className={ProfileFormTitle}>Edit Profile</h1>
        <p className={ProfileFormDescription}>
          Use the form below to edit your profile.
        </p>
      </header>
      <div className={ProfileFormItem}>
        <label className={ProfileFormLabel} htmlFor="title">
          Name *
        </label>
        <InputText
          type="text"
          id="name"
          defaultValue={userProfile.name}
          variant={!userProfile.name ? 'default' : 'defaultValidated'}
          onChange={(e) => updateProfileValue('name', e.target.value)}
        />
      </div>
      <div className={ProfileFormItem}>
        <label className={ProfileFormLabel} htmlFor="description">
          Description
        </label>
        <InputText
          type="text"
          id="description"
          defaultValue={userProfile.description}
          variant='default'
          onChange={(e) => updateProfileValue('description', e.target.value)}
        />
      </div>
      <div className={ProfileFormItem}>
        <label className={ProfileFormLabel}>Skills</label>
        <div className={tags ? SkillsList : SkillHidden}>
          {tags.map((tag: Tag) => (
            <TagButton
              key={tag.id}
              title={tag.title}
              color={tag.color}
              variant="defaultAdd"
              onClick={() => addSkill(tag)}
            >
              <IconAdd variant="small" />
            </TagButton>
          ))}
        </div>
        <label className={ProfileFormDescription}>Selected skills:</label>
        <div className={SkillsContainer}>
          <div className={SkillsList}>
            {selectedTags.map((tag: Tag) => (
              <TagButton
                key={tag.id}
                title={tag.title}
                color={tag.color}
                variant="defaultRemove"
                onClick={() => deleteSkill(tag)}
              >
                <IconRemove variant="small" />
              </TagButton>
            ))}
          </div>
        </div>
      </div>
      <div className={ProfileFormItem}>
        <Button
          text="Edit"
          type="submit"
          variant="defaultDisabled"
          onClick={(event) => onEdit(userProfile, event)}
        />
      </div>
    </form>
  );
};

export default UserEditWrapper;
