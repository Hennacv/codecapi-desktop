import { useState } from 'react';
import { LiveEditor, LiveProvider } from 'react-live';
import { Language } from 'prism-react-renderer';
import {
  ReactLiveEditoLabel,
  ReactLiveEditorContainer,
  ReactLiveEditorHeader,
  ReactLiveEditorOptions,
  ReactLiveEditorPaste,
  ReactLiveEditorTitle,
} from './react-live-editor-styles.css';
import Button from '../../button/button';
import Select from '../../select/select';
import theme from '../themes/theme';

interface ReactLiveEditorProps {
  position: number;
}

const ReactLiveEditor = ({ position }: ReactLiveEditorProps) => {
  const [code, setCode] = useState<string>();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('jsx');
  const [languages, setLanguages] = useState<Array<Language>>([
    'jsx',
    'css',
    'javascript',
    'sass',
    'scss',
    'graphql',
    'python',
    'typescript',
  ]);

  async function PasteClipboard() {
    const clipboard = await navigator.clipboard.readText();

    setCode(code + clipboard);
  }

  return (
    <>
      <div className={ReactLiveEditorHeader}>
        <label className={ReactLiveEditoLabel}>
          Code block <span className={ReactLiveEditorTitle}>{position}</span>
        </label>
      </div>
      <div className={ReactLiveEditorOptions}>
        <p className={ReactLiveEditorTitle}>Programming language:</p>
        <Select
          options={languages.map((language) => {
            return { value: language, label: language };
          })}
          onChange={(event) => setSelectedLanguage(event.target.value as Language)}
        />
      </div>

      <div className={ReactLiveEditorContainer}>
        <LiveProvider
          code={!code ? '// paste your code here' : code}
          language={selectedLanguage}
          theme={theme}
        >
          <LiveEditor />
        </LiveProvider>
        <div className={ReactLiveEditorPaste}>
          <Button
            text="Paste"
            type="button"
            variant="small"
            onClick={PasteClipboard}
          />
        </div>
      </div>
    </>
  );
};

export default ReactLiveEditor;
