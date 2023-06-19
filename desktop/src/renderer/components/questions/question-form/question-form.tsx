import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { useEditQuestion } from 'renderer/hooks/use-edit-question';
import { useSelectedTags } from '../../../hooks/use-selected-tags';
import { QuestionDto, Tag, Block, AddQuestionForm } from 'renderer/utils/types';
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
import { toastSuccess } from 'renderer/notifications/toast/show-toast-notification';
import QuestionPreview from '../question-preview/question-preview';

const QuestionForm = ({
  title,
  blocks,
  tags,
  id,
  isEditing = false,
}: AddQuestionForm) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const addQuestion = useAddQuestion({
    onSuccess: () => {
      toastSuccess(t('toast.success.question.add'));
      navigate('/questions');
    }
  });
  const editQuestion = useEditQuestion(id);
  const [isShown, setIsShown] = useState(false);

  if(!blocks.length) { blocks = [{ position: 0, type: 'text', value: '', contents: '' }]; }


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
    updateFormValue('tags', [...form.tags, { id: tag.id, title: tag.title, color: tag.color  }]);
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

  const addBlock = (type: 'text' | 'code') => {
    switch (type) {
      case 'text':
        updateFormValue('blocks', [
          ...form.blocks,
          { position: form.blocks.length, type: type, value: '' },
        ]);
        break;
      case 'code':
        updateFormValue('blocks', [
          ...form.blocks,
          {
            position: form.blocks.length,
            type: type,
            value: '',
            language: 'javascript',
          },
        ]);
        break;
      default:
        break;
    }
  };

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

  const onEdit = (
    form: QuestionDto,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (editQuestion) {
      editQuestion.mutate(form);
    }
  };

  return (
    <>
      <QuestionPreview
        question={form}
        isShown={isShown}
        onClose={() => setIsShown(false)}
      />
      <form className={QuestionFormSection}>
        <div className={QuestionFormItem}>
          <label className={QuestionFormLabel} htmlFor="title">
            {t('common.title')} *
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
            <p>{t('instruction.blocks')}</p>
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
          <label className={QuestionFormLabel}>{t('common.tags')}</label>
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
          <label className={QuestionFormDescription}>
            {t('question.form.input.title.selected')}:
          </label>
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
              text={t('question.new.button.preview')}
              type="button"
              variant="defaultDisabled"
              disabled={addQuestion.isLoading || !form.title}
              onClick={() => setIsShown(true)}
            />
          </div>
        ) : (
          <div className={QuestionFormItem}>
            <Button
              text={t('button.save')}
              type="submit"
              variant="defaultDisabled"
              onClick={(event) => onEdit(form, event)}
            />
          </div>
        )}
      </form>
    </>
  );
};

export default QuestionForm;
