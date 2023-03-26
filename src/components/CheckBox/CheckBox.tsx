import React, { forwardRef, RefObject } from 'react';
import './CheckBox.scss';
import cn from 'classnames';

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
  ref?: RefObject<HTMLInputElement>;
};

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ onChange, className = '', ...props }, ref) => {
    const inputCheckClass = cn('checkbox', `${className}`);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.checked);
    };

    return (
      <input
        {...props}
        className={inputCheckClass}
        type="checkbox"
        onChange={handleChange}
        ref={ref}
      />
    );
  }
);
export default CheckBox;
