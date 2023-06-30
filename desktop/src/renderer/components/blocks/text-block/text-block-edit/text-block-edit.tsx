import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import * as Emoji from 'quill-emoji';
import ImageResize from 'quill-image-resize-module--fix-imports-error';
import {
  ContainerStyles,
  TextBlockHeader,
  TextBlockLabel,
} from '../text-block-styles.css';
import IconRemove from 'assets/icons/icon-remove';
import { ButtonClose } from 'renderer/components/ui/button/button-styles.css';
import Button from 'renderer/components/ui/button/button';
import { useTranslation } from 'react-i18next';
import { useMemo, useRef } from 'react';
import '../../../../aws-config';
import { useUploadImage } from 'renderer/hooks/use-upload-image';

interface TextBlockEditProps {
  position: number;
  updateFormBlock: (position: number, value: string, contents: string) => void;
  removeBlock: (position: number) => void;
  value: string;
}

Quill.register('modules/emoji', Emoji);
Quill.register('modules/imageResize', ImageResize);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [
    { list: 'ordered' },
    { list: 'bullet' },
    { indent: '-1' },
    { indent: '+1' },
    { align: [] },
  ],
  ['emoji'],
];

const TextBlockEdit = ({
  position,
  updateFormBlock,
  removeBlock,
  value,
}: TextBlockEditProps) => {
  const { t } = useTranslation();
  const quillRef = useRef<ReactQuill | null>(null);
  const uploadImage = (e:any) => useUploadImage(e, quillRef, t)

  const handleImageUpload = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = uploadImage;
  };

  const modules = useMemo(
    () => ({
      imageResize: {
        displayStyles: {
          backgroundColor: 'black',
          border: 'none',
          color: 'white',
        },
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: () => handleImageUpload(),
        },
      },
      'emoji-toolbar': true,
      'emoji-textarea': false,
      'emoji-shortname': true,
    }),
    []
  );

  const updateParent = (position: number, value: string, contents: string) => {
    updateFormBlock(position, value, contents);
  };

  return (
    <>
      <div className={TextBlockHeader}>
        <label className={TextBlockLabel}>{t('common.description')}</label>
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
        ref={quillRef}
        modules={modules}
      />
    </>
  );
};

export default TextBlockEdit;
