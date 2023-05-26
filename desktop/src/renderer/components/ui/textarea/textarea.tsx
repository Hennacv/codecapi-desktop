import { TextareaVariants } from './textarea-styles.css';

interface TextareaProps {
  placeholder?: string;
  id: string;
  variant: keyof typeof TextareaVariants;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ placeholder, id, variant, onChange }: TextareaProps) => {
  return (
    <textarea
      className={TextareaVariants[variant]}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
};

export default Textarea;
