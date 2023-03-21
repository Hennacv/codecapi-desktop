import { TextareaVariants } from './textarea-styles.css'

interface TextareaProps {
  id: string;
	variant: keyof typeof TextareaVariants;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({id, variant, onChange}: TextareaProps) => {
  return (
    <textarea 
			className={TextareaVariants[variant]} 
			id={id}
			onChange={onChange}
    />
  );
}

export default Textarea;