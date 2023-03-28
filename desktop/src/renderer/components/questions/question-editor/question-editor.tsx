import ReactQuill, { Quill } from 'react-quill';
import * as Emoji from 'quill-emoji';

import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import { useState } from 'react';

Quill.register('modules/emoji', Emoji);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  ['emoji'],
];

function QuestionEditor() {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <ReactQuill
      theme="snow"
      placeholder="Start writing..."
      modules={{
        toolbar: {
          container: toolbarOptions,
        },
        'emoji-toolbar': true,
        'emoji-textarea': false,
        'emoji-shortname': true,
      }}
      onChange={setValue}
    />
  );
}

export default QuestionEditor;
