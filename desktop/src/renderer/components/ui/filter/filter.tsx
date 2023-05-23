import { Tag, Filter } from "renderer/utils/types";
import { useSelectedTags } from "renderer/hooks/use-selected-tags";
import { FilterTag, FilterTitle } from "./filter-styles.css";
import TagButton from "renderer/components/tags/tag-button/tag-button";
import Modal from "../modal/modal";

const Filter = ({tags, setTags, isShown, onClose}:Filter) => {
  let selectedTags = useSelectedTags(tags);

  const addTag= (tag: Tag) => {
    selectedTags.addTag(tag);
    setTags([...tags, tag]);
  }

  const deleteTag=(tag: Tag) =>{
    selectedTags.deleteTag(tag);
    const tempTags = tags.filter((selectedTag:Tag) => selectedTag !== tag);
     setTags(tempTags);
  }

  return (
    <Modal isShown={isShown} onClose={() => onClose(false)}>
        <h4 className={FilterTitle}>Tags</h4>
        <div className={FilterTag}>
          {selectedTags.tags.map((tag: Tag) => (
            <TagButton
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => addTag(tag)}
            />
            ))}
        </div>
        <h4 className={FilterTitle}>Filters</h4>
        <div className={FilterTag}>
          {selectedTags.selectedTags.map((tag) => (
            <TagButton
            key={tag.id}
            title={tag.title}
            color={tag.color}
            variant="defaultAdd"
            onClick={() => deleteTag(tag)}
            />
            ))}
        </div>
      </Modal>
  )
}

export default Filter;