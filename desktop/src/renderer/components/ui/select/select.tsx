import { SelectButton, SelectContainer } from './select-styles.css';

type Option<T> = {
  value: T;
  label: string;
}

interface SelectProps<T> {
  options: Option<T>[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = <T extends unknown>({ options, onChange }: SelectProps<T>) => {
  return (
    <select className={SelectButton} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value as string}>{option.label.charAt(0).toUpperCase() + option.label.slice(1)}</option>
      ))}
    </select>
  );
};

export default Select;
