import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { AddQuestionDto, Tag } from 'renderer/utils/types';
import { useSelectedTags } from '../../../hooks/use-selected-tags';
import { Block } from '../../../utils/types';
import {
  NewQuestionBlocks,
  NewQuestionBlocksOptions,
  NewQuestionContainer,
  NewQuestionDescription,
  NewQuestionFormItem,
  NewQuestionHeader,
  NewQuestionLabel,
  NewQuestionSection,
  NewQuestionTagContainer,
  NewQuestionTagList,
  NewQuestionTitle,
} from './new-question-styles.css';

import TagButton from '../../tags/tag-button/tag-button';
import InputText from '../../ui/input-text/input-text';
import Button from '../../ui/button/button';
import IconAdd from 'assets/icons/icon-add';
import IconRemove from 'assets/icons/icon-remove';
import IconText from 'assets/icons/icon-text';
import IconCode from 'assets/icons/icon-code';
import DynamicBlocksEdit from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-edit/dynamic-blocks-edit';

interface AddQuestionForm {
  title: string;
  text: string;
  blocks: Block[];
  tags: Pick<Tag, 'id'>[];
}

function NewQuestion() {
  const navigate = useNavigate();

  const addQuestion = useAddQuestion({
    onSuccess: () => navigate('/questions'),
  });

  const [form, setForm] = useState<AddQuestionForm>({
    title: '',
    text: '',
    blocks: [],
    tags: [],
  });

  let formTags = useSelectedTags();

  const addTag = (tag: Tag) => {
    formTags.addTag(tag);
    updateFormValue('tags', [...form.tags, { id: tag.id }]);
  }

  const deleteTag = (tag: Tag) => {
    formTags.deleteTag(tag);

    const tempTag = form.tags.filter((formTag) => formTag.id !== tag.id);
    updateFormValue('tags', tempTag);
  }

  const updateFormValue = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  }

  const addBlock = (type: 'text' | 'code' ) => {
    updateFormValue('blocks', [
      ...form.blocks,
      { position: form.blocks.length, type: type, value: '', language: 'javascript' },
    ]);
  }

  const removeBlock = (position: number) => {
    const newBlocks = form.blocks.filter(block => block.position !== position);

    newBlocks.forEach((block, index) => {
      block.position = index
    })
    updateFormValue('blocks', [
      ...newBlocks
    ]);
  }

  const onSubmit = (newQuestion: AddQuestionDto) => {
    addQuestion.mutate(newQuestion);
  }

  return (
    <div className={NewQuestionContainer}>
      <header className={NewQuestionHeader}>
        <h1 className={NewQuestionTitle}>New question</h1>
        <p className={NewQuestionDescription}>
          Use the form below to submit a question to all CodeCapi employees.
        </p>
      </header>
      <form className={NewQuestionSection}>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel} htmlFor="title">
            Title *
          </label>
          <InputText
            type="text"
            id="title"
            value={form.title}
            variant={!form.title ? 'default' : 'defaultValidated'}
            onChange={(e) => updateFormValue('title', e.target.value)}
          />
        </div>
        <DynamicBlocksEdit
          field="blocks"
          blocks={form.blocks}
          updateFormValue={(field, value) => updateFormValue(field, value)}
          removeBlock={removeBlock}
        />
        <div className={NewQuestionFormItem}>
          <div className={NewQuestionBlocks}>
            <p>
              The buttons below allow you to add a text or code field to your
              question.
            </p>
            <div className={NewQuestionBlocksOptions}>
              <Button
                type={'button'}
                variant={'smallSquare'}
                onClick={() => addBlock('text')}
              >
                <IconText variant={'small'} />
              </Button>
              <Button
                type={'button'}
                variant={'smallSquare'}
                onClick={() => addBlock('code')}
              >
                <IconCode variant={'small'} />
              </Button>
            </div>
          </div>
        </div>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel}>Labels</label>
          <div
            className={
              formTags.tags ? NewQuestionTagList : 'visibility: hidden'
            }
          >
            {formTags.tags.map((tag: Tag) => (
              <TagButton
                key={tag.id}
                title={tag.title}
                color={tag.color}
                variant="defaultAdd"
                onClick={() => addTag(tag)}
              >
                <IconAdd variant="small" />
              </TagButton>
            ))}
          </div>
          <label className={NewQuestionDescription}>Selected labels:</label>
          <div className={NewQuestionTagContainer}>
            <div className={NewQuestionTagList}>
              {formTags.selectedTags.map((tag: Tag) => (
                <TagButton
                  key={tag.id}
                  title={tag.title}
                  color={tag.color}
                  variant="defaultRemove"
                  onClick={() => deleteTag(tag)}
                >
                  <IconRemove variant="small" />
                </TagButton>
              ))}
            </div>
          </div>
        </div>
        <div className={NewQuestionFormItem}>
          <Button
            text="Save"
            type="submit"
            variant="defaultDisabled"
            disabled={addQuestion.isLoading || !form.title}
            onClick={() => onSubmit(form)}
          />
        </div>
      </form>
    </div>
  );
}

export default NewQuestion;
