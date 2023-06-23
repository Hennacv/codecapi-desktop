import {
  Tag,
  UseSelectedTagsType,
  UseSelectedUsersType,
  User,
} from 'renderer/utils/types';
import {
  FilterContainer,
  FilterHeader,
  FilterItemsVariants,
  FilterTitle,
  SelectedFilterItems,
  SelectedFilterVariants,
} from './filter-styles.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import TagButton from 'renderer/components/tags/tag-button/tag-button';
import Modal from '../modal/modal';
import IconRemove from 'assets/icons/icon-remove';
import IconAdd from 'assets/icons/icon-add';
import InputText from '../input-text/input-text';
import Button from '../button/button';

interface FilterTestProps {
  tagsHandler?: UseSelectedTagsType;
  usersHandler?: UseSelectedUsersType;
}

const Filter = ({ tagsHandler, usersHandler }: FilterTestProps) => {
  const { t } = useTranslation();

  const [isShown, setIsShown] = useState(false);

  const [tagSearchValue, setTagSearchValue] = useState('');
  const [userSearchValue, setUserSearchValue] = useState('');

  const addTag = (tag: Tag) => {
    if (!!tagsHandler) {
      tagsHandler.addTag(tag);
    }
  };

  const deleteTag = (tag: Tag) => {
    if (!!tagsHandler) {
      tagsHandler.deleteTag(tag);
    }
  };

  const addUser = (user: User) => {
    if (!!usersHandler) {
      usersHandler.addUser(user);
    }
  };

  const deleteUser = (user: User) => {
    if (!!usersHandler) {
      usersHandler.deleteUser(user);
    }
  };

  let filteredRemainingUsers = usersHandler?.users.filter((user) =>
    user.name.toLocaleLowerCase().includes(userSearchValue)
  );
  let filteredRemainingTags = tagsHandler?.tags.filter((tag) =>
    tag.title.toLocaleLowerCase().includes(tagSearchValue)
  );

  return (
    <>
      <Button
        text={t('button.filter')}
        variant="default"
        type="button"
        onClick={() => setIsShown(true)}
      />
      <Modal isShown={isShown} onClose={() => setIsShown(false)}>
        {!!usersHandler ? (
          <div className={FilterContainer}>
            <div className={FilterHeader}>
              <h4 className={FilterTitle}>{t('common.users')}</h4>
              <InputText
                type="text"
                id="user-search"
                variant="extraSmall"
                value={userSearchValue}
                onChange={(event) => setUserSearchValue(event.target.value)}
                placeholder={t('common.search')}
              />
            </div>
            <div
              className={
                usersHandler.selectedUsers.length > 0
                  ? FilterItemsVariants.disabled
                  : FilterItemsVariants.default
              }
            >
              {!!filteredRemainingUsers &&
                filteredRemainingUsers.map((user: User) => (
                  <TagButton
                    key={user.uid}
                    title={user.name}
                    color="blue"
                    variant="smallAdd"
                    onClick={() => {
                      addUser(user);
                      setTagSearchValue('');
                    }}
                  >
                    <IconAdd variant="small" />
                  </TagButton>
                ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        {!!tagsHandler ? (
          <div className={FilterContainer}>
            <div className={FilterHeader}>
              <h4 className={FilterTitle}>{t('common.tags')}</h4>
              <InputText
                type="text"
                id="tag-search"
                variant="extraSmall"
                value={tagSearchValue}
                onChange={(event) => setTagSearchValue(event.target.value)}
                placeholder={t('common.search')}
              />
            </div>
            <div className={FilterItemsVariants.default}>
              {!!filteredRemainingTags &&
                filteredRemainingTags.map((tag: Tag) => (
                  <TagButton
                    key={tag.id}
                    title={tag.title}
                    color={tag.color}
                    variant="smallAdd"
                    onClick={() => {
                      addTag(tag);
                      setTagSearchValue('');
                    }}
                  >
                    <IconAdd variant="small" />
                  </TagButton>
                ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className={SelectedFilterItems}>
          {!!usersHandler && (
            <div className={SelectedFilterVariants.users}>
              <h4 className={FilterTitle}>{t('filter.user.title.selected')}</h4>
              <div className={FilterItemsVariants.default}>
                {usersHandler?.selectedUsers.map((user: User) => (
                  <TagButton
                    key={user.uid}
                    title={user.name}
                    color="blue"
                    variant="smallAdd"
                    onClick={() => deleteUser(user)}
                  >
                    <IconRemove variant="small" />
                  </TagButton>
                ))}
              </div>
            </div>
          )}
          {!!tagsHandler && (
            <div className={SelectedFilterVariants.tags}>
              <h4 className={FilterTitle}>{t('filter.tags.title.selected')}</h4>
              <div className={FilterItemsVariants.default}>
                {tagsHandler?.selectedTags.map((tag: Tag) => (
                  <TagButton
                    key={tag.id}
                    title={tag.title}
                    color={tag.color}
                    variant="smallAdd"
                    onClick={() => deleteTag(tag)}
                  >
                    <IconRemove variant="small" />
                  </TagButton>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Filter;
