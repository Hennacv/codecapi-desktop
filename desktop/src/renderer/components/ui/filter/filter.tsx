import { Tag, Filter } from "renderer/utils/types";
import { useSelectedTags } from "renderer/hooks/use-selected-tags";
import { ModalStyles, ModalClose, ModalContent, ModalTag, ModalTitle, Reset } from "./filter-styles.css";
import TagButton from "renderer/components/tags/tag-button/tag-button";
import IconRemove from "assets/icons/icon-remove";


const Filter = ({tags, setTags, show, onClose}:Filter) => {
  let selectedTags = useSelectedTags();

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
    <div className={show ? ModalStyles.show : ModalStyles.basic } onClick={onClose}>
      <div className={ModalContent} onClick={e => e.stopPropagation()}>
        <h4 className={ModalTitle}>Tags</h4>
        <div className={ModalTag}>
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
        <h4 className={ModalTitle}>Filters</h4>
        <div className={ModalTag}>
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
        <div className={ModalClose}>
          <button className={Reset} onClick={onClose} >
            <IconRemove variant="small"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filter;