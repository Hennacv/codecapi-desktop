import InputText from '../input-text/input-text';
import { Searched } from 'renderer/utils/types';

const Search = ({ searchTerm, setSearchTerm, placeholder }: Searched) => {
  return (
    <InputText
      placeholder={placeholder}
      type="search"
      id="question-search"
      value={searchTerm}
      variant="default"
      onChange={(searchTerm) =>
        setSearchTerm(searchTerm.target.value.toLowerCase())
      }
    />
  );
};

export default Search;
