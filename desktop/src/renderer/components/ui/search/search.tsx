import { Searched } from 'renderer/utils/types';
import { SearchContainer, SearchFilterContainer } from './search-styles.css';

import InputText from '../input-text/input-text';
import TagButton from 'renderer/components/tags/tag-button/tag-button';
import IconAdd from 'assets/icons/icon-add';

const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder,
  searchTags,
  addTag,
}: Searched) => {
  return (
    <div className={SearchContainer}>
      <InputText
        placeholder={placeholder}
        type="text"
        id="question-search"
        value={searchTerm}
        variant="default"
        onChange={(searchTerm) =>
          setSearchTerm(searchTerm.target.value.toLowerCase())
        }
      />
      {!!searchTags && (
        <span className={SearchFilterContainer}>
          {searchTags.map((tag) => (
            <TagButton
              title={tag.title}
              color={tag.color}
              variant="defaultAdd"
              onClick={() => addTag(tag)}
              key={tag.id}
            >
              <IconAdd variant="small" />
            </TagButton>
          ))}
        </span>
      )}
    </div>
  );
};

export default Search;
