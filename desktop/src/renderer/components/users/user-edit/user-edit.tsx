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
import { useTranslation } from 'react-i18next';

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
  const {t} = useTranslation();
  const editProfile = useEditProfile(parseInt(id!));
  const [userProfile, setUserProfile] = useState<EditProfileDto>(user);

  const { addTag, deleteTag, tags, selectedTags } = useSelectedTags(user.tags);

  const addSkill = (tag: Tag) => {
    addTag(tag);    
    updateProfileValue('tags', [...userProfile.tags, { id: tag.id }]);
  };

  const deleteSkill = (tag: Tag) => {
    deleteTag(tag);
    const tempTags = userProfile.tags.filter((userTag) => userTag.id !== tag.id);
    updateProfileValue('tags', tempTags);
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
        <h1 className={ProfileFormTitle}>{t('user.edit.page.title')}</h1>
        <p className={ProfileFormDescription}>{t('user.edit.page.description')}</p>
      </header>
      <div className={ProfileFormItem}>
        <label className={ProfileFormLabel} htmlFor="title">
          {t('common.name')}
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
          {t('common.description')}
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
        <label className={ProfileFormLabel}>{t('common.tags')}</label>
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
        <label className={ProfileFormDescription}>{t('user.edit.title.selected')}</label>
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
                <IconRemove variant="small"/>
              </TagButton>
            ))}
          </div>
        </div>
      </div>
      <div className={ProfileFormItem}>
        <Button
          text={t('button.save')}
          type="submit"
          variant="defaultDisabled"
          disabled={!userProfile.name}
          onClick={(event) => onEdit(userProfile, event)}
        />
      </div>
    </form>
  );
};

export default UserEditWrapper;
