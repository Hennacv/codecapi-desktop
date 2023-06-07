import { useGetUsers } from 'renderer/hooks/use-get-users';
import { Tag, User } from 'renderer/utils/types';
import { UserCardsContainer } from './user-card/user-card-styles.css';
import UserCard from './user-card/user-card';
import { SFContainer } from '../ui/search/search-styles.css';
import { useState } from 'react';
import Search from '../ui/search/search';
import Button from '../ui/button/button';
import Filter from '../ui/filter/filter';
import TagCard from '../tags/tag-card/tag-card';
import { FilterTermContainer } from '../ui/filter/filter-styles.css';
import { useTranslation } from 'react-i18next';

const UserList = () => {
  const {t} = useTranslation();
  const { data: users = [] } = useGetUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [isShown, setIsShown] = useState(false);

  let result = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  if (!!tags.length) {
    result = result.filter((user) => {
      return user.tags.some((userTag) => {
        return tags.some((tag) => tag.id === userTag.id);
      });
    });
  }

  return (
    <>
      <div className={SFContainer}>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={t('common.search')}/>
        <Button
          text="Filter"
          variant="small"
          type="button"
          onClick={() => setIsShown(true)}
        />
        <Filter
          tags={tags}
          setTags={setTags}
          isShown={isShown}
          onClose={() => setIsShown(false)}
        />
      </div>
      <div className={FilterTermContainer}>
      {!!tags.length && (
            <>
              {tags.map((tag) => (
                <TagCard
                  key={tag.id}
                  title={tag.title}
                  color={tag.color}
                  variant="small"
                />
              ))}
            </>
          )}
      </div>
      <div className={UserCardsContainer}>
        {result
          .sort((a, b) => a.id - b.id)
          .map((user: User, index) => (
            <UserCard user={user} key={index} />
            ))}
      </div>
    </>
  );
};

export default UserList;
