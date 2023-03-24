import { useState } from 'react';
import { LiveEditor, LiveProvider } from 'react-live';
import { ReactLiveEditoLabel, ReactLiveEditorContainer, ReactLiveEditorPaste } from './react-live-editor-styles.css';
import Button from '../../button/button';
import theme from '../themes/theme';

const ReactLiveEditor = () => {

  const [code, setCode] = useState<string>();

  async function PasteClipboard() {
    const clipboard = await navigator.clipboard.readText();

    setCode(code + clipboard);
  }
  
  return (
    <>
      <label className={ReactLiveEditoLabel}>Code (react-live)</label>
      <div className={ReactLiveEditorContainer}>
        <LiveProvider
          code={!code ? '// paste your code here' : code}
          language="tsx"
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
