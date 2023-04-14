import { Block } from 'renderer/utils/types';
import { DynamicBlocksContainer } from '../dynamic-blocks-styles.css';
import TextBlockEdit from 'renderer/components/blocks/text-block/text-block-edit/text-block-edit';
import CodeBlockEdit from '../../code-block/code-block-edit/code-block-edit';

interface DynamicBlocksEditProps {
  field: string;
  blocks: Block[];
  updateFormValue: (field: string, value: any) => void;
}

const DynamicBlocksEdit = ({
  blocks,
  field,
  updateFormValue,
}: DynamicBlocksEditProps) => {
  const updateDynamicBlock = (
    position: number,
    value: string,
    contents?: string,
    language?: string
  ) => {
    const indexSelectedBlock = blocks.findIndex(
      (block) => block.position === position
    );
    blocks[indexSelectedBlock].value = value;
    blocks[indexSelectedBlock].contents = contents;
    blocks[indexSelectedBlock].language = language;
    updateFormValue(field, blocks);
  };

  return (
    <>
      {blocks.length > 0 && (
        <div className={DynamicBlocksContainer}>
          {blocks.map((block: Block, index) =>
            block.type === 'code' ? (
              <CodeBlockEdit
                key={index}
                position={block.position}
                updateDynamicBlock={(position, value, language) =>
                  updateDynamicBlock(position, value, '', language)
                }
              />
            ) : block.type === 'text' ? (
              <TextBlockEdit
                key={index}
                position={block.position}
                updateFormBlock={(position, value, contents) =>
                  updateDynamicBlock(position, value, contents, '')
                }
              />
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlocksEdit;
