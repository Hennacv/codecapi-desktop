import { SelectVariants } from './select-styles.css';
interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  options: Option[];
  variant: keyof typeof SelectVariants;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  language: string;
}

const Select = ({ options, variant, onChange, language }: SelectProps) => {
  return (
    <select className={SelectVariants[variant]} onChange={onChange} value={language}>
      {options.map((option, index) => (
        <option key={index} value={option.value as string}>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</option>
      ))}
    </select>
  );
};

export default Select;
