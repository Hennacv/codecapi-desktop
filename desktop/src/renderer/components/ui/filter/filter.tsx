import * as Dialog from "@radix-ui/react-dialog";
import { Tag, Filter } from "renderer/utils/types";
import { useSelectedTags } from "renderer/hooks/use-selected-tags";
import { DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTag, DialogTitle, Reset } from "./filter-styles.css";
import Button from "../button/button";
import TagButton from "renderer/components/tags/tag-button/tag-button";
import IconRemove from "assets/icons/icon-remove";

const Filter = ({tags, setTags}:Filter) => {
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
    <div>
      <Dialog.Root>
        <Dialog.Trigger className={Reset}>
          <Button
            text="Filter"
            variant="small"
            type="button"
            onClick={() => undefined}
          />
        </Dialog.Trigger>
        <Dialog.Portal className={DialogPortal}>
          <Dialog.Overlay className={DialogOverlay}/>
          <Dialog.Content className={DialogContent}>
            <div>
              <Dialog.Title className={DialogTitle}>Tags</Dialog.Title>
              <div className={DialogTag}>
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
            </div>
            <div>
              <Dialog.Title className={DialogTitle}>Filters</Dialog.Title>
              <div className={DialogTag}>
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
            </div>
            <div className={DialogClose}>
              <Dialog.Close asChild className={Reset}>
                <button>
                  <IconRemove variant="small"/>
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      </div>
  )
}

export default Filter;