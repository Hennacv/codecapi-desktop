import { Block, isCodeBlock, isTextBlock } from 'renderer/utils/types';
import { DynamicBlocksContainer } from '../dynamic-blocks-styles.css';
import TextBlockEdit from 'renderer/components/blocks/text-block/text-block-edit/text-block-edit';
import CodeBlockEdit from '../../code-block/code-block-edit/code-block-edit';

interface DynamicBlocksEditProps {
  field: string;
  blocks: Block[];
  updateFormValue: (field: string, value: any) => void;
  removeBlock: (position: number) => void;
}

const DynamicBlocksEdit = ({ blocks, removeBlock, updateFormValue }: DynamicBlocksEditProps) => {
  const updateDynamicBlock = (
    position: number,
    value: string,
    optionalValue: { 
      contents?: string, 
      language?: string 
    }
  ) => {
    const indexSelectedBlock = blocks.findIndex(
      (block) => block.position === position
    );
    const block = blocks[indexSelectedBlock];
    blocks[indexSelectedBlock].value = value;

    if (isCodeBlock(block) && optionalValue.language) {
      block.language = optionalValue.language;
    }
    if (isTextBlock(block) && optionalValue.contents) {
      block.contents = optionalValue.contents;
    } 
    updateFormValue('blocks', blocks);
  };

  return (
    <>
      {blocks.length > 0 && (
        <div className={DynamicBlocksContainer}>
          {blocks.map((block: Block) =>
            isCodeBlock(block) ? (
              <CodeBlockEdit
                value={blocks[block.position].value}
                key={block.position}
                position={block.position}
                updateDynamicBlock={(position, value, language) =>
                  updateDynamicBlock(position, value, {language: language})
                }
                removeBlock={removeBlock}
                language={block.language}
              />
            ) : (
              <TextBlockEdit
                value={blocks[block.position].value}
                key={block.position}
                position={block.position}
                updateFormBlock={(position, value, contents) =>
                  updateDynamicBlock(position, value, {contents: contents})
                }
                removeBlock={removeBlock}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlocksEdit;
