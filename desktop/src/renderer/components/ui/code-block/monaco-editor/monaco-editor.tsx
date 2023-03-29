import { useRef, useState } from 'react';
import { languages } from './languages';
import Editor from '@monaco-editor/react';
import {
  MonacoEditorLabel,
  MonacoEditorContainer,
  MonacoEditorHeader,
  MonacoEditorOptions,
  MonacoEditorTitle,
  MonacoEditorInput,
} from './monaco-editor-styles.css';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Select from '../../select/select';

interface MonacoEditorProps {
  position: number;
  isReadOnly: boolean;
}

const MonacoEditor = ({ position, isReadOnly }: MonacoEditorProps) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('javascript');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  return (
    <>
      <div className={MonacoEditorHeader}>
        <label className={MonacoEditorLabel}>
          Code block
          <span className={MonacoEditorTitle}>(number: {position})</span>
        </label>
      </div>
      <div className={MonacoEditorContainer}>
        <Editor
          className={MonacoEditorInput}
          theme="vs-dark"
          language={selectedLanguage}
          defaultValue="// paste your code here"
          options={{
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingStrategy: 'advanced',
            overviewRulerLanes: 3,
            autoIndent: 'advanced',
            formatOnPaste: true,
            formatOnType: true,
            readOnly: isReadOnly,
            minimap: {
              enabled: false,
            },
          }}
          onMount={handleEditorDidMount}
        />
        <div className={MonacoEditorOptions}>
          <Select
            options={languages.map((language) => {
              return { value: language, label: language };
            })}
            variant={'small'}
            onChange={(event) => setSelectedLanguage(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default MonacoEditor;
