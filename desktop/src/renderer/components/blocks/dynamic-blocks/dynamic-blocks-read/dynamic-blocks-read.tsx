import { Block, isCodeBlock, isTextBlock } from 'renderer/utils/types';
import { DynamicBlocksContainer } from '../dynamic-blocks-styles.css';
import CodeBlockRead from '../../code-block/code-block-read/code-block-read';
import TextBlockRead from '../../text-block/text-block-read/text-block-read';

interface DynamicBlocksReadProps {
  blocks: Block[];
}

const DynamicBlocksRead = ({ blocks }: DynamicBlocksReadProps) => {
  return (
    <>
      {blocks.length > 0 && (
        <div className={DynamicBlocksContainer}>
          {blocks.map((block: Block, index) =>
            isCodeBlock(block) ? (
              <CodeBlockRead
                key={index}
                language={block.language}
                value={block.value}
              />
            ) : isTextBlock(block) ? (
              <TextBlockRead key={index} value={block.value} />
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlocksRead;
