import { Block } from 'renderer/utils/types';
import { DynamicBlockContainer } from './dynamic-block-styles.css';

import MonacoEditor from '../../code-block/monaco-editor';
import QuestionEditor from 'renderer/components/questions/question-editor/question-editor';

interface DynamicBlockProps {
  blocks: Block[];
  updateFormBlock: (position: number, value: string, language?: string) => void;
}

const DynamicBlock = ({ blocks, updateFormBlock }: DynamicBlockProps) => {
  function updateDynamicBlock(
    position: number,
    value: string,
    language?: string
  ) {
    updateFormBlock(position, value, language);
  }

  return (
    <>
      {blocks.length > 0 && (
        <div className={DynamicBlockContainer}>
          {blocks.map((block: Block, index) =>
            block.type === 'code' ? (
              <MonacoEditor
                key={index}
                position={block.position}
                updateDynamicBlock={(position, value, language) =>
                  updateDynamicBlock(position, value, language)
                }
              />
            ) : block.type === 'text' ? (
              <QuestionEditor
                key={index}
                position={block.position}
                updateFormBlock={(position, value, language) =>
                  updateDynamicBlock(position, value, language)
                }
              />
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlock;
