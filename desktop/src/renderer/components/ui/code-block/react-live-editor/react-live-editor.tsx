import { useRef, useState } from 'react';
import { languages } from './languages';
import Editor, { Monaco } from '@monaco-editor/react';
import {
  ReactLiveEditoLabel,
  ReactLiveEditorContainer,
  ReactLiveEditorHeader,
  ReactLiveEditorOptions,
  ReactLiveEditorTitle,
} from './react-live-editor-styles.css';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Select from '../../select/select';
import Button from '../../button/button';

interface ReactLiveEditorProps {
  position: number;
  isReadOnly: boolean;
}

const ReactLiveEditor = ({ position, isReadOnly }: ReactLiveEditorProps) => {
  const [code, setCode] = useState<string>('// paste your code here');
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('javascript');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  function handleEditorDidMount(
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editorRef.current = editor;
    editorRef.current.layout({
      width: 1000,
      height: 19,
    });
  }

  function showValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  function changeEditorLayout() {
    if (editorRef.current) {
      const contentHeight = Math.min(
        1000,
        editorRef.current.getContentHeight()
      );
      editorRef.current.layout({
        width: 1000,
        height: contentHeight,
      });
    }
  }

  editorRef.current?.onDidContentSizeChange(changeEditorLayout);

  return (
    <>
      <div className={ReactLiveEditorHeader}>
        <label className={ReactLiveEditoLabel}>
          Code block{' '}
          <span className={ReactLiveEditorTitle}>(number: {position})</span>
        </label>
      </div>
      <div className={ReactLiveEditorOptions}>
        <Select
          options={languages.map((language) => {
            return { value: language, label: language };
          })}
          onChange={(event) => setSelectedLanguage(event.target.value)}
        />
        <Button
          text="show value"
          onClick={showValue}
          type={'button'}
          variant={'small'}
        />
      </div>
      <Editor
        className={ReactLiveEditorContainer}
        theme="vs-dark"
        language={selectedLanguage}
        value={code}
        options={{
          automaticLayout: true,
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          wrappingStrategy: 'advanced',
          overviewRulerLanes: 0,
          minimap: {
            enabled: false,
          },
          readOnly: isReadOnly,
        }}
        onMount={handleEditorDidMount}
      />
    </>
  );
};

export default ReactLiveEditor;
