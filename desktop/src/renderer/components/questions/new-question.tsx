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
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <header className="text-lg font-medium leading-6 text-gray-900">
            Nieuwe vraag
          </header>

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titel
              </label>
              <div className="control">
                <input
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  type="text"
                  id="title"
                  onChange={(e) => updateFormValue('title', e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700"
              >
                Tekst
              </label>
              <div className="control mt-1">
                <textarea
                  id="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => updateFormValue('text', e.target.value)}
                />
              </div>
            </div>

            <div className="col-span-6">
              <div className="">
                <label className="block text-sm font-medium text-gray-700">
                  Tags
                </label>

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
                    className={`inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 ${
                      tagIsSelected(tag) ? 'is-link' : ''
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
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
  );
}

export default NewQuestion;
