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
import Select from '../select/select';

interface MonacoEditorProps {
  position: number;
  updateDynamicBlock: (
    position: number,
    value: string,
    language?: string
  ) => void;
}

const MonacoEditor = ({ position, updateDynamicBlock }: MonacoEditorProps) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('javascript');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  function updateParent(position: number, language?: string) {
    if (editorRef.current) {
      const value = editorRef.current.getValue();
      updateDynamicBlock(position, value, selectedLanguage);
    }
  }

  return (
    <>
      <div className={MonacoEditorHeader}>
        <label className={MonacoEditorLabel}>
          Code
          <span className={MonacoEditorTitle}>(block: {position})</span>
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
            minimap: {
              enabled: false,
            },
          }}
          onChange={() => {
            updateParent(position);
          }}
          onMount={handleEditorDidMount}
        />
        <div className={MonacoEditorOptions}>
          <Select
            options={languages.map((language) => {
              return { value: language, label: language };
            })}
            variant="small"
            onChange={(event) => {
              setSelectedLanguage(event.target.value);
              updateParent(position, event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MonacoEditor;
