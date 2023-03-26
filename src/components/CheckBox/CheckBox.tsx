import React from 'react';
import './CheckBox.scss';
import cn from 'classnames';

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ onChange, className = '', ...props }) => {
  const inputCheckClass = cn('checkbox', `${className}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.checked);
  };

  return <input {...props} className={inputCheckClass} type="checkbox" onChange={handleChange} />;
};
export default CheckBox;
