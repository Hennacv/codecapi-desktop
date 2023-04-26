import { Tag, Filter } from "renderer/utils/types";
import { useSelectedTags } from "renderer/hooks/use-selected-tags";
import { ModalStyles, ModalContent, ModalTag, ModalTitle } from "./filter-styles.css";
import TagButton from "renderer/components/tags/tag-button/tag-button";
import IconRemove from "assets/icons/icon-remove";
import { ButtonClose } from "../button/button-styles.css";
import Button from "../button/button";

const Filter = ({tags, setTags, isShown, onClose}:Filter) => {
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
    <div className={isShown ? ModalStyles.show : ModalStyles.basic } onClick={onClose}>
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
        <div className={ButtonClose.filter}>
          <Button variant="reset" type="button" onClick={onClose} >
            <IconRemove variant="small"/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Filter;