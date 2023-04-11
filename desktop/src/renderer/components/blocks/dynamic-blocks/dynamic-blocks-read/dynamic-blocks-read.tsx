import { Block } from 'renderer/utils/types';
import {
  DynamicBlocksContainer,
} from '../dynamic-blocks-styles.css';
import CodeBlockRead from '../../code-block/code-block-read/code-block-read';

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
              <CodeBlockRead key={index} language={block.language} value={block.value} />
            ) : block.type === 'text' ? (
              <span key={index}>Text-block placeholder</span>
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default DynamicBlocksRead;
