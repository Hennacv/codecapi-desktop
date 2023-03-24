import { InputTextVariants } from "../input-text/input-text-styles.css";

interface InputTextProps {
  placeholder?: string;
  type: 'text' | 'email' | 'search' | 'url';
  id: string;
  variant: keyof typeof InputTextVariants;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({placeholder, type, id, variant, onChange}: InputTextProps) => {
  return (
    <input className={InputTextVariants[variant]}
      placeholder={placeholder}
      type={type} 
      id={id} 
      onChange={onChange}
    />
  );
}

export default InputText;