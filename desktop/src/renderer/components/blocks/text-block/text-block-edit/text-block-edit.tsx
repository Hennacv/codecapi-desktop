import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import * as Emoji from 'quill-emoji';
import {
  ContainerStyles,
  TextBlockHeader,
  TextBlockLabel,
  TextBlockTitle,
} from '../text-block-styles.css';

interface TextBlockEditProps {
  position: number;
  updateFormBlock: (position: number, value: string, contents: string) => void;
}

Quill.register('modules/emoji', Emoji);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['emoji'],
];

const TextBlockEdit = ({ position, updateFormBlock }: TextBlockEditProps) => {
  function updateParent(position: number, value: string, contents: string) {
    updateFormBlock(position, value, contents);
  }

  return (
    <>
      <div className={TextBlockHeader}>
        <label className={TextBlockLabel}>
          Description
          <span className={TextBlockTitle}>(block: {position})</span>
        </label>
      </div>
      <ReactQuill
        theme="snow"
        className={ContainerStyles}
        placeholder="Start writing..."
        onChange={(content, delta, source, editor) => {
          updateParent(position, editor.getHTML(), JSON.stringify(editor.getContents()));
        }}
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

export default TextBlockEdit;
