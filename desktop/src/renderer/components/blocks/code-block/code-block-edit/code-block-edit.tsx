import { useRef, useState } from 'react';
import { languages } from './languages';
import Editor from '@monaco-editor/react';
import {
  CodeBlockLabel,
  CodeBlockContainer,
  CodeBlockHeader,
  CodeBlockOptions,
  CodeBlockTitle,
  CodeBlockInput,
} from '../code-block-styles.css';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import Select from 'renderer/components/ui/select/select';

interface CodeBlockEditProps {
  position: number;
  updateDynamicBlock: (
    position: number,
    value: string,
    language?: string
  ) => void;
}

const CodeBlockEdit = ({ position, updateDynamicBlock }: CodeBlockEditProps) => {
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
      <div className={CodeBlockHeader}>
        <label className={CodeBlockLabel}>
          Code
          <span className={CodeBlockTitle}>(block: {position})</span>
        </label>
      </div>
      <div className={CodeBlockContainer}>
        <Editor
          className={CodeBlockInput}
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
        <div className={CodeBlockOptions}>
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

export default CodeBlockEdit;
