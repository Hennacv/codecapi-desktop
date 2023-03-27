import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { AddQuestionDto, Tag } from 'renderer/utils/types';
import { useSelectedTags } from './use-selected-tags';
import {
  NewQuestionContainer,
  NewQuestionDescription,
  NewQuestionFormItem,
  NewQuestionHeader,
  NewQuestionLabel,
  NewQuestionParagraph,
  NewQuestionSection,
  NewQuestionTagContainer,
  NewQuestionTagList,
  NewQuestionTitle,
} from './new-question-styles.css';

import TagButton from '../../tags/tag-button/tag-button';
import InputText from '../../ui/input-text/input-text';
import Textarea from '../../ui/textarea/textarea';
import Button from '../../ui/button/button';
import ReactLiveEditor from 'renderer/components/ui/code-block/react-live-editor/react-live-editor';

interface AddQuestionForm {
  title: string;
  text: string;
  tags: Pick<Tag, 'id'>[];
}

const NewQuestion = () => {
  const navigate = useNavigate();

  const addQuestion = useAddQuestion({
    onSuccess: () => navigate('/questions'),
  });

  const [form, setForm] = useState<AddQuestionForm>({
    title: '',
    text: '',
    tags: [],
  });

  let formTags = useSelectedTags();

  function addTag(tag: Tag) {
    formTags.addTag(tag);
    updateFormValue('tags', [...form.tags, { id: tag.id }]);
  }

  function deleteTag(tag: Tag) {
    formTags.deleteTag(tag);

    let tempTag = form.tags.filter((formTag) => formTag.id !== tag.id);
    updateFormValue('tags', tempTag);
  }

  function updateFormValue(field: string, value: any) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function onSubmit(newQuestion: AddQuestionDto) {
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
            variant={!form.title ? 'default' : 'defaultValidated'}
            onChange={(e) => updateFormValue('title', e.target.value)}
          />
        </div>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel} htmlFor="paragraph">
            Description *
            <span className={NewQuestionParagraph}>(paragraph 1)</span>
          </label>
          <Textarea
            id="text"
            variant={!form.text ? 'default' : 'validated'}
            onChange={(e) => updateFormValue('text', e.target.value)}
          />
        </div>

        <div className={NewQuestionFormItem}>
          <ReactLiveEditor position={1} />
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
                icon="add"
                onClick={() => addTag(tag)}
              />
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
                  icon="delete"
                  onClick={() => deleteTag(tag)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={NewQuestionFormItem}>
          <Button
            text="Save"
            type="submit"
            variant="defaultDisabled"
            disabled={addQuestion.isLoading || !form.text || !form.title}
            onClick={() => onSubmit(form)}
          />
        </div>
      </form>
    </div>
  );
};

export default NewQuestion;
