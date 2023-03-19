import React, { ChangeEvent, FC } from 'react';
import './Input.scss';
import cn from 'classnames';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({ value = '', onChange, ...props }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const inputClass = cn('input', { input_disabled: props.disabled }, `${props.className}`);
  return <input type="text" {...props} className={inputClass} onChange={handleInputChange} />;
};

export default Input;
