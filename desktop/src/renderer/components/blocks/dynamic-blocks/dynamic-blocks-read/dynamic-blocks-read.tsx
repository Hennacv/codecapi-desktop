import { Block } from 'renderer/utils/types';
import { DynamicBlocksContainer } from '../dynamic-blocks-styles.css';
import CodeBlockRead from '../../code-block/code-block-read/code-block-read';
import TextBlockRead from '../../text-block/text-block-read/text-block-read';
import { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';

interface DynamicBlocksReadProps {
  blocks: Block[];
}

const DynamicBlocksRead = ({ blocks }: DynamicBlocksReadProps) => {
  return (
    <>
      {blocks.length > 0 && (
        <div className={DynamicBlocksContainer}>
          {blocks.map((block: Block, index) =>
            block.type === 'code' ? (
              <CodeBlockRead
                key={index}
                language={block.language}
                value={block.value}
              />
            ) : block.type === 'text' ? (
              <TextBlockRead key={index} value={block.value} />
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlocksRead;
