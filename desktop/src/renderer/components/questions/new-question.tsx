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
    <form>
      <div className="">
        <div className="">
          <header className="">Nieuwe vraag</header>

          <div className="">
            <div className="">
              <label htmlFor="title" className="">
                Titel
              </label>
              <div className="control">
                <input
                  className=""
                  type="text"
                  id="title"
                  onChange={(e) => updateFormValue('title', e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6">
              <label htmlFor="text" className="">
                Tekst
              </label>

              <div className="">
                <textarea
                  id="text"
                  className=""
                  onChange={(e) => updateFormValue('text', e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <div className="">
                <label className="">Tags</label>

                <span
                  className=""
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
                  className=""
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
                  <div key={tag.id} className="" onClick={() => toggleTag(tag)}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <div className="control">
              <button
                className=""
                disabled={addQuestion.isLoading || !form.text || !form.title}
                onClick={() => onSubmit(form)}
                type="button"
              >
                Vraag aanmaken
              </button>
            </div>

            <Link to="/questions" className="">
              Terug
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewQuestion;
