import { TextBlockHTML } from "../text-block-styles.css";

interface TextBlockReadProps {
  value: string;
}

const TextBlockRead = ({ value }: TextBlockReadProps) => {
  return (
    <>
      <div className={TextBlockHTML} dangerouslySetInnerHTML={{__html: value}}></div>
    </>
  )
};

export default TextBlockRead;
