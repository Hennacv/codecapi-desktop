import { InputTextVariants } from "../input-text/input-text-styles.css";

interface InputTextProps {
  placeholder?: string;
  type: 'text' | 'email' | 'search' | 'url';
  id: string;
  value: string;
  variant: keyof typeof InputTextVariants;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({placeholder, type, id, variant, onChange,value}: InputTextProps) => {
  return (
    <input className={InputTextVariants[variant]}
      placeholder={placeholder}
      type={type}
      value={value}
      id={id}
      onChange={onChange}
    />
  );
}

export default InputText;