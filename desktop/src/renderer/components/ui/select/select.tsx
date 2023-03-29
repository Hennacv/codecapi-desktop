import { SelectVariants } from './select-styles.css';

type Option<T> = {
  value: T;
  label: string;
}

interface SelectProps<T> {
  options: Option<T>[];
  variant: keyof typeof SelectVariants;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <T extends unknown>({ options, variant, onChange }: SelectProps<T>) => {
  return (
    <select className={SelectVariants[variant]} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value as string}>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</option>
      ))}
    </select>
  );
};

export default Select;
