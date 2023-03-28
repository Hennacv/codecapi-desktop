import { useState } from 'react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Language } from 'prism-react-renderer';
import { languages } from './languages';
import {
  ReactLiveEditoLabel,
  ReactLiveEditorContainer,
  ReactLiveEditorHeader,
  ReactLiveEditorOptions,
  ReactLiveEditorTitle,
} from './react-live-editor-styles.css';
import Select from '../../select/select';
import theme from '../themes/theme';

interface ReactLiveEditorProps {
  position: number;
}

const ReactLiveEditor = ({ position }: ReactLiveEditorProps) => {
  const [code, setCode] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('jsx');

  return (
    <>
      <div className={ReactLiveEditorHeader}>
        <label className={ReactLiveEditoLabel}>
          Code block <span className={ReactLiveEditorTitle}>(number: {position})</span>
        </label>
      </div>
      <div className={ReactLiveEditorContainer}>
        <LiveProvider
          code={!code ? '// paste your code here' : code}
          language={selectedLanguage}
          theme={theme}
          noInline={true}
        >
          <LiveEditor />
        </LiveProvider>
        <div className={ReactLiveEditorOptions}>
          <Select
            options={languages.map((language) => {
              return { value: language, label: language };
            })}
            onChange={(event) =>
              setSelectedLanguage(event.target.value as Language)
            }
          />
        </div>
      </div>
    </>
  );
};

export default ReactLiveEditor;
