import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { AddQuestionDto, Tag } from 'renderer/utils/types';
import { useFormTags } from './use-form-tags';
import { 
  NewQuestionContainer, 
  NewQuestionDescription, 
  NewQuestionFormItem, 
  NewQuestionHeader, 
  NewQuestionInput,
  NewQuestionLabel, 
  NewQuestionParagraph, 
  NewQuestionSection, 
  NewQuestionSubmit, 
  NewQuestionTagContainer, 
  NewQuestionTagList, 
  NewQuestionTextarea, 
  NewQuestionTitle 
} from './question-styles.css';

import TagButton from '../tags/tag-button';

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

  let formTags = useFormTags();

  function addTag(tag: Tag) {
    formTags.addTag(tag);
    updateFormValue('tags', [...form.tags, {'id': tag.id}]);
  }

  function deleteTag(tag: Tag) {
    formTags.deleteTag(tag)

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
        <h1 className={NewQuestionTitle}>Nieuwe vraag</h1>
        <p className={NewQuestionDescription}>
          Via onderstaand formulier kan een vraag worden gesteld aan alle medewerkers van CodeCapi.
        </p>
      </header>
      <form className={NewQuestionSection}>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel} htmlFor="title">Titel *</label>
          <input 
            className={!form.title ? NewQuestionInput.default : NewQuestionInput.validated} 
            type="text" 
            id="title" 
            onChange={(e) => updateFormValue('title', e.target.value)}
          />
        </div>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel} htmlFor="paragraph">
            Beschrijving *<span className={NewQuestionParagraph}>(paragraaf 1)</span>
          </label>
          <textarea 
            className={!form.text ? NewQuestionTextarea.default : NewQuestionTextarea.validated} 
            id="text" 
            onChange={(e) => updateFormValue('text', e.target.value)}
          />
        </div>
        <div className={NewQuestionFormItem}>
          <label className={NewQuestionLabel}>Labels</label>
          <div className={formTags.tags ? NewQuestionTagList : 'visibility: hidden'}>
            {formTags.tags.map((tag: Tag) => (
                <TagButton 
                  key={tag.id} 
                  title={tag.title} 
                  color={tag.color} 
                  variant="defaultAdd" 
                  icon={'add'} 
                  onClick={() => addTag(tag)} 
                />
              ))}
          </div>
          <label className={NewQuestionDescription}>Geselecteerde labels:</label>
          <div className={NewQuestionTagContainer}>
            <div className={NewQuestionTagList}>
              {formTags.selectedTags.map((tag: Tag) => (
                <TagButton 
                  key={tag.id} 
                  title={tag.title} 
                  color={tag.color} 
                  variant="defaultRemove" 
                  icon={'delete'} 
                  onClick={() => deleteTag(tag)} 
                />
              ))}
            </div>
          </div>
        </div>
        <div className={NewQuestionFormItem}>
          <button 
            className={NewQuestionSubmit}
            type="button" 
            disabled={addQuestion.isLoading || !form.text || !form.title} 
            onClick={() => onSubmit(form)}>
              Opslaan
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewQuestion;
