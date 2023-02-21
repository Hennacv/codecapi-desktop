import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAddQuestion } from 'renderer/hooks/use-add-questions';
import { useAddTag } from 'renderer/hooks/use-add-tag';
import { useGetTags } from 'renderer/hooks/use-get-tags';
import { queryClient } from 'renderer/utils/react-query';
import { AddQuestionDto, Tag } from 'renderer/utils/types';

interface AddQuestionForm {
  title: string;
  text: string;
  tags: Pick<Tag, 'id'>[];
}

function NewQuestion() {
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const addTagMutation = useAddTag({
    onSuccess: () => {
      queryClient.invalidateQueries('tags');
      clearTagForm();
    },
  });
  const navigate = useNavigate();
  const addQuestion = useAddQuestion({
    onSuccess: () => navigate('/questions'),
  });
  const { data: tags = [] } = useGetTags();

  function onSubmit(newQuestion: AddQuestionDto) {
    addQuestion.mutate(newQuestion);
  }

  const [form, setForm] = useState<AddQuestionForm>({
    title: '',
    text: '',
    tags: [],
  });

  function updateFormValue(field: string, value: any) {
    setForm({
      ...form,
      [field]: value,
    });
  }

  function toggleTag(tag: Tag) {
    let newValue: any;
    if (tagIsSelected(tag)) {
      newValue = form.tags.filter((formTag) => formTag.id !== tag.id);
    } else {
      newValue = [...form.tags, { id: tag.id }];
    }
    updateFormValue('tags', newValue);
  }

  function tagIsSelected(tag: Tag) {
    return form.tags.some((formTag) => formTag.id === tag.id);
  }

  function addTag() {
    if (!tags.some((tag) => tag.title === tagInput)) {
      addTagMutation.mutate({ title: tagInput });
    }
    clearTagForm();
  }

  function clearTagForm() {
    setShowTagInput(false);
    setTagInput('');
  }

  return (
    <div>
      <form>
        <div className="card">
          <div className="card-content">
            <header className="title is-5">Nieuwe vraag</header>

            <div className="field">
              <label className="label">Titel</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  onChange={(e) => updateFormValue('title', e.target.value)}
                />
              </div>
            </div>

            <div className="field mb-5">
              <label className="label">Tekst</label>
              <div className="control">
                <textarea
                  className="textarea"
                  onChange={(e) => updateFormValue('text', e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="field mb-5">
              <div className="is-flex is-align-items-center mb-3">
                <label className="label mb-0 mr-3">Tags</label>

                <span
                  className="pointer mr-3"
                  onClick={() =>
                    showTagInput ? clearTagForm() : setShowTagInput(true)
                  }
                >
                  +
                </span>
              </div>

              {showTagInput && (
                <input
                  value={tagInput}
                  autoFocus
                  className="input is-small mb-3"
                  placeholder="Enter om aan te maken, escape om te annuleren"
                  onChange={(e) => {
                    setTagInput(e.target.value);
                  }}
                  onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                      addTag();
                    } else if (key === 'Escape') {
                      clearTagForm();
                    }
                  }}
                />
              )}

              <div className="tags">
                {tags.map((tag: any) => (
                  <div
                    key={tag.id}
                    className={`tag is-medium pointer ${
                      tagIsSelected(tag) ? 'is-link' : ''
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link"
                  disabled={addQuestion.isLoading || !form.text || !form.title}
                  onClick={() => onSubmit(form)}
                >
                  Vraag aanmaken
                </button>
              </div>

              <Link to="/questions" className="button mb-5">
                Terug
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewQuestion;
