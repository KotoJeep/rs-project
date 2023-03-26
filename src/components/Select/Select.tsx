import React, { SelectHTMLAttributes } from 'react';
import './Select.scss';

import cn from 'classnames';

export type Option = {
  label: string;
  value: string;
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> & {
  options: Option[];
  value: Option | null | undefined;
  onChange: (option: Option) => void;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = options.find((option) => option.value === event.target.value);
    if (option) {
      onChange(option);
    }
  };

  return (
    <select className="select" value={value?.value || ''} onChange={handleChange}>
      {options.map((option) => (
        <option className="select_option" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
