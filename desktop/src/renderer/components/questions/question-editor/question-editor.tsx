import ReactQuill, { Quill } from 'react-quill';
import * as Emoji from 'quill-emoji';

import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import {
  ContainerStyles,
  QuestionEditorHeader,
  QuestionEditorLabel,
  QuestionEditorTitle,
} from './question-editor-styles.css';

interface QuestionEditorProps {
  position: number;
  updateFormBlock: (position: number, value: string, language?: string) => void;
}

Quill.register('modules/emoji', Emoji);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['emoji'],
];

const QuestionEditor = ({ position, updateFormBlock }: QuestionEditorProps) => {
  function updateParent(position: number, value: string) {
    updateFormBlock(position, value);
  }

  return (
    <>
      <div className={QuestionEditorHeader}>
        <label className={QuestionEditorLabel}>
          Description
          <span className={QuestionEditorTitle}>(block: {position})</span>
        </label>
      </div>
      <ReactQuill
        theme="snow"
        className={ContainerStyles}
        placeholder="Start writing..."
        onChange={(content, delta, source, editor) =>
          updateParent(position, editor.getText())
        }
        modules={{
          toolbar: {
            container: toolbarOptions,
          },
          'emoji-toolbar': true,
          'emoji-textarea': false,
          'emoji-shortname': true,
        }}
      />
    </>
  );
};

export default QuestionEditor;
