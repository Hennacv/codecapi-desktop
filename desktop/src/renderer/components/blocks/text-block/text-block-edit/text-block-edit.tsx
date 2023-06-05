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
import IconRemove from 'assets/icons/icon-remove';
import { ButtonClose } from 'renderer/components/ui/button/button-styles.css';
import Button from 'renderer/components/ui/button/button';
import { useTranslation } from 'react-i18next';

interface TextBlockEditProps {
  position: number;
  updateFormBlock: (position: number, value: string, contents: string) => void;
  removeBlock: (position: number) => void;
  value: string;
}

Quill.register('modules/emoji', Emoji);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  ['emoji'],
];

const TextBlockEdit = ({
  position,
  updateFormBlock,
  removeBlock,
  value,
}: TextBlockEditProps) => {
  const {t} = useTranslation();
  
  function updateParent(position: number, value: string, contents: string) {
    updateFormBlock(position, value, contents);
  }

  return (
    <>
      <div className={TextBlockHeader}>
        <label className={TextBlockLabel}>
          {t('questionForm.inputTitle.description')}
        </label>
        <div className={ButtonClose.base}>
          <Button
            variant="reset"
            type="button"
            onClick={() => removeBlock(position)}
          >
            <IconRemove variant="small" />
          </Button>
        </div>
      </div>
      <ReactQuill
        theme="snow"
        className={ContainerStyles}
        value={value}
        onChange={(content, delta, source, editor) => {
          updateParent(
            position,
            editor.getHTML(),
            JSON.stringify(editor.getContents())
          );
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
