import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { AddQuestionDto, Tag } from 'renderer/utils/types';
import { useSelectedTags } from '../../../hooks/use-selected-tags';
import { Block } from '../../../utils/types';
import {
  QuestionFormBlocks,
  QuestionFormBlocksOptions,
  QuestionFormContainer,
  QuestionFormDescription,
  QuestionFormItem,
  QuestionFormHeader,
  QuestionFormLabel,
  QuestionFormSection,
  QuestionFormTagContainer,
  QuestionFormTagList,
  QuestionFormTitle,
} from './question-form-styles.css';

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

function QuestionForm() {
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
    <div className={QuestionFormContainer}>
      <header className={QuestionFormHeader}>
        <h1 className={QuestionFormTitle}>New question</h1>
        <p className={QuestionFormDescription}>
          Use the form below to submit a question to all CodeCapi employees.
        </p>
      </header>
      <form className={QuestionFormSection}>
        <div className={QuestionFormItem}>
          <label className={QuestionFormLabel} htmlFor="title">
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
        <div className={QuestionFormItem}>
          <div className={QuestionFormBlocks}>
            <p>
              The buttons below allow you to add a text or code field to your
              question.
            </p>
            <div className={QuestionFormBlocksOptions}>
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
        <div className={QuestionFormItem}>
          <label className={QuestionFormLabel}>Labels</label>
          <div
            className={
              formTags.tags ? QuestionFormTagList : 'visibility: hidden'
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
          <label className={QuestionFormDescription}>Selected labels:</label>
          <div className={QuestionFormTagContainer}>
            <div className={QuestionFormTagList}>
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
        <div className={QuestionFormItem}>
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

export default QuestionForm;
