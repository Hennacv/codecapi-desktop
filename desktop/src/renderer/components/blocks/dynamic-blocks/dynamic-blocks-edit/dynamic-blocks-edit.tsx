import { Block, isCodeBlock, TextBlock, CodeBlock } from 'renderer/utils/types';
import { DynamicBlocksContainer } from '../dynamic-blocks-styles.css';
import TextBlockEdit from 'renderer/components/blocks/text-block/text-block-edit/text-block-edit';
import CodeBlockEdit from '../../code-block/code-block-edit/code-block-edit';

interface DynamicBlocksEditProps {
  field: string;
  blocks: Block[];
  updateFormValue: (field: string, value: any) => void;
  removeBlock: (position: number) => void
}

const DynamicBlocksEdit = ({
  blocks,
  removeBlock
}: DynamicBlocksEditProps) => {
  const updateCodeBlock = (
    position: number,
    value: string,
    language: string
  ) => {
    const indexSelectedBlock = blocks.findIndex(
      (block) => block.position === position
    );
    blocks[indexSelectedBlock].value = value;
    (blocks[indexSelectedBlock] as CodeBlock).language = language;
  };

  const updateTextBlock = (
    position: number,
    value: string,
    contents: string
    ) => {
    const indexSelectedBlock = blocks.findIndex(
      (block) => block.position === position
    );
    blocks[indexSelectedBlock].value = value;
    (blocks[indexSelectedBlock] as TextBlock).contents = contents;
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
                  updateCodeBlock(position, value, language)
                }
                removeBlock={removeBlock}
                language={(blocks[block.position] as CodeBlock).language}
              />
            ) : (
              <TextBlockEdit
                value={blocks[block.position].value}
                key={block.position}
                position={block.position}
                updateFormBlock={(position, value, contents) =>
                  updateTextBlock(position, value, contents)
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
