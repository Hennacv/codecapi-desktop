import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill-emoji/dist/quill-emoji.css';
import * as Emoji from 'quill-emoji';
import ImageResize from 'quill-image-resize-module--fix-imports-error';
import ImageCompress from 'quill-image-compress';
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
import AWS from 'aws-sdk';
import '../../../../aws-config';

interface TextBlockEditProps {
  position: number;
  updateFormBlock: (position: number, value: string, contents: string) => void;
  removeBlock: (position: number) => void;
  value: string;
}

Quill.register('modules/emoji', Emoji);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/imageCompress', ImageCompress);

const toolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'link', 'image'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' },{align: []}],
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
  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: (e: any) => handleImageUpload(e),
        },
      },
      'emoji-toolbar': true,
      'emoji-textarea': false,
      'emoji-shortname': true,
      imageResize: {
        displayStyles: {
          backgroundColor: 'black',
          border: 'none',
          color: 'white',
        },
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
      },
      imageCompress: {
        quality: 1.0,
        maxWidth: 1000,
        maxHeight: 1000,
        imageType: 'image/jpeg',
      },
    }),
    []
  );

  function updateParent(position: number, value: string, contents: string) {
    updateFormBlock(position, value, contents);
  }

  const handleImageUpload = (file: File) => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async (e: any) => {
      const file = e.target.files?.[0];
      const fileName = file.name;
      if (!file) return;
      if (file) {
        const s3 = new AWS.S3();
        const params = {
          Bucket: 'codecapi-portal',
          Key: fileName,
          Body: file,
        };

        s3.upload(
          params,
          (err: Error | null, data: AWS.S3.ManagedUpload.SendData) => {
            if (err) {
              console.log(err);
              t('toast.fail.image');
            } else {
              const imageUrl = data.Location;
              const range = quillRef.current?.getEditor().getSelection(true);
              if (range) {
                quillRef.current
                  ?.getEditor()
                  .insertEmbed(range.index, 'image', imageUrl);
              }
            }
          }
        );
      }
    };
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
