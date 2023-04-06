import { Block } from 'renderer/utils/types';
import { DynamicBlockContainer } from './dynamic-block-styles.css';

import MonacoEditor from '../../code-block/monaco-editor';
import QuestionEditor from 'renderer/components/questions/question-editor/question-editor';

interface DynamicBlockProps {
  field: string
  blocks: Block[];
  updateFormValue: (field: string, value: any) => void;
}

const DynamicBlock = ({ blocks, field, updateFormValue }: DynamicBlockProps) => {

  const updateDynamicBlock = (
    position: number,
    value: string,
    language?: string
  ) => {
    const indexSelectedBlock = blocks
      .map((block) => block.position)
      .indexOf(position);
    const tempBlocks = blocks;
    tempBlocks[indexSelectedBlock].value = value;
    tempBlocks[indexSelectedBlock].language = language;
    updateFormValue(field, tempBlocks);
  };

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
