import {
  CodeBlockContainer,
  CodeBlockLanguage,
  CodeBlockOptions,
  CodeBlockVariants,
} from '../code-block-styles.css';
import { useRef } from 'react';

import Editor from '@monaco-editor/react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Button from 'renderer/components/ui/button/button';
import IconCopy from 'assets/icons/icon-copy';
import { toastInfo } from 'renderer/notifications/toast/show-toast-notification';
import { useTranslation } from 'react-i18next';

interface CodeBlockReadProps {
  language?: string;
  value: string;
}

const CodeBlockRead = ({ language, value }: CodeBlockReadProps) => {
  const {t} = useTranslation();
  let editorRef = useRef<monaco.editor.IStandaloneCodeEditor>().current;

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef = editor;
    editorRef.setValue(value);
    editor.layout({
      width: 1000,
      height: editor.getContentHeight(),
    });
  }

  function copytoClipboard() {
    toastInfo(t('toast.copy.code'));
    navigator.clipboard.writeText(value);
  }

  return (
    <div className={CodeBlockContainer}>
      <Editor
        className={CodeBlockVariants['read']}
        theme="vs-dark"
        language={language}
        options={{
          renderLineHighlight: 'none',
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          overviewRulerBorder: false,
          readOnly: true,
          minimap: {
            enabled: false,
          },
          scrollbar: {
            vertical: 'hidden',
          },
        }}
        onMount={handleEditorDidMount}
      />
      <div className={CodeBlockOptions}>
        <p className={CodeBlockLanguage}>{language}</p>
        <Button
          type={'button'}
          variant={'smallSquare'}
          onClick={() => copytoClipboard()}
        >
          <IconCopy variant={'extraSmall'} />
        </Button>
      </div>
    </div>
  );
};

export default CodeBlockRead;
