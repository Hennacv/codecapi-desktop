import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { useEditQuestion } from 'renderer/hooks/use-edit-question';
import { useSelectedTags } from '../../../hooks/use-selected-tags';
import { QuestionDto, Tag, Block } from 'renderer/utils/types';
import {
  QuestionFormBlocks,
  QuestionFormBlocksOptions,
  QuestionFormDescription,
  QuestionFormItem,
  QuestionFormLabel,
  QuestionFormSection,
  QuestionFormTagContainer,
  QuestionFormTagList,
  QuestionHidden,
} from './question-form-styles.css';
import TagButton from '../../tags/tag-button/tag-button';
import InputText from '../../ui/input-text/input-text';
import Button from '../../ui/button/button';
import IconAdd from 'assets/icons/icon-add';
import IconRemove from 'assets/icons/icon-remove';
import IconText from 'assets/icons/icon-text';
import IconCode from 'assets/icons/icon-code';
import DynamicBlocksEdit from 'renderer/components/blocks/dynamic-blocks/dynamic-blocks-edit/dynamic-blocks-edit';
import { useTranslation } from 'react-i18next';

interface AddQuestionForm {
  title: string;
  blocks: Block[];
  tags: Tag[];
  id?: number;
  isEditing?: boolean;
}

const QuestionForm = ({
  title,
  blocks,
  tags,
  id,
  isEditing = false,
}: AddQuestionForm) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const addQuestion = useAddQuestion({
    onSuccess: () => navigate('/questions'),
  });
  const editQuestion = useEditQuestion(id);

  let [form, setForm] = useState<AddQuestionForm>({
    title,
    blocks,
    tags,
    id,
    isEditing,
  });

  const currentTags = tags;
  let formTags = useSelectedTags(currentTags);

  const addTag = (tag: Tag) => {
    formTags.addTag(tag);
    updateFormValue('tags', [...form.tags, { id: tag.id }]);
  };

  const deleteTag = (tag: Tag) => {
    formTags.deleteTag(tag);

    const tempTag = form.tags.filter((formTag) => formTag.id !== tag.id);
    updateFormValue('tags', tempTag);
  };

  const updateFormValue = (field: string, value: any) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const addBlock = (type: 'text' | 'code' ) => {
    switch (type) {
      case 'text':
        updateFormValue('blocks', [
          ...form.blocks,
          { position: form.blocks.length, type: type, value: ''},
        ]);
        break;
      case 'code':
        updateFormValue('blocks', [
          ...form.blocks,
          { position: form.blocks.length, type: type, value: '', language: 'javascript' },
        ]);
        break;
      default:
        break;
    } 
  }

  const removeBlock = (position: number) => {
    const newBlocks = form.blocks.filter(
      (block) => block.position !== position
    );

    newBlocks.forEach((block, index) => {
      block.position = index;
    });
    updateFormValue('blocks', [...newBlocks]);
    blocks = form.blocks;
  };

  const onSubmit = (newQuestion: QuestionDto) => {
    addQuestion.mutate(newQuestion);
  };

  const onEdit = (form: QuestionDto) => {
    if (editQuestion) {
      editQuestion.mutate(form);
    }
  };

  return (
    <form className={QuestionFormSection}>
      <div className={QuestionFormItem}>
        <label className={QuestionFormLabel} htmlFor="title">
          {t('questionForm.inputTitle.title')} *
        </label>
        <InputText
          type="text"
          id="title"
          defaultValue={form.title}
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
          <p>{t('questionForm.blocksInstruction')}</p>
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
        <label className={QuestionFormLabel}>{t('questionForm.inputTitle.tags')}</label>
        <div className={formTags.tags ? QuestionFormTagList : QuestionHidden}>
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
        <label className={QuestionFormDescription}>{t('questionForm.inputSelected.tags')}:</label>
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
      {!isEditing ? (
        <div className={QuestionFormItem}>
          <Button
            text={t('questionNew.buttonSubmit')}
            type="submit"
            variant="defaultDisabled"
            disabled={addQuestion.isLoading || !form.title}
            onClick={() => onSubmit(form)}
          />
        </div>
      ) : (
        <div className={QuestionFormItem}>
          <Button
            text={t('questionEdit.buttonEdit')}
            type="submit"
            variant="defaultDisabled"
            onClick={() => onEdit(form)}
          />
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
