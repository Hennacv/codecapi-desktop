import { useState } from 'react';
import { ReactMonacoEditorContainer } from './react-monaco-editor-styles.css';
import MonacoEditor from 'react-monaco-editor';

const ReactMonacoEditor = () => {
  const [code, setCode] = useState<string>();

  const options = {
    selectOnLineNumbers: true
  };


  return (
    <MonacoEditor
      // className={ReactMonacoEditorContainer}
      width="100%"
      height="200"
      value={code}
      language="javascript"
      theme="vs-dark"
      options={options}
    />
  );
};

export default ReactMonacoEditor;
