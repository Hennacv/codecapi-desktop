import { FilterStyles } from "renderer/components/questions/question-list/question-list-styles.css";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "../button/button";
import { DialogContent, DialogOverlay, DialogPortal, DialogTag, DialogTitle, Reset } from "./filter-styles.css";
import TagButton from "renderer/components/tags/tag-button/tag-button";
import { Tag } from "renderer/utils/types";
import { useSelectedTags } from "renderer/hooks/use-selected-tags";

interface Filter {
  tags: Tag[];
}

const Filter = ({items, setItems}) => {
  let selectedTags = useSelectedTags();

  function addTag(tag: Tag) {
    selectedTags.addTag(tag);
    updateFilter('tags', [...items.tags, tag]);
  }

  function deleteTag(tag: Tag) {
    selectedTags.deleteTag(tag);

    const tempTag = items.tags.filter((selectedTag:Tag) => selectedTag !== tag);
    updateFilter('tags', tempTag);

  }

  function updateFilter(field: string, value: any) {
   setItems({...items, [field]: value,});
  }

  return (
    <div className={FilterStyles}>
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
                  variant='defaultAdd'
                  onClick={() => deleteTag(tag)}
                  />
                ))}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      </div>
  )
}

export default Filter;