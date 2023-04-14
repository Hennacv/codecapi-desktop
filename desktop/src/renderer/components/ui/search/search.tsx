import InputText from "../input-text/input-text";
import { Searched } from "renderer/utils/types";

const Search = ({searchTerm, setSearchTerm}: Searched) => {
  return (
  <InputText
    placeholder="Search"
    type= "search"
    id = "question-search"
    value={searchTerm}
    variant= "extraSmall"
    onChange= {(searchTerm) => setSearchTerm(searchTerm.target.value.toLowerCase())}
  />
  )
}

export default Search;