import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';
import './CheckBox.scss';
import cn from 'classnames';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: Ref<HTMLInputElement>;
};

export const CheckBox: React.FC<InputProps> = forwardRef(({ className = '', ...props }, ref) => {
  const inputCheckClass = cn('checkbox', `${className}`);

  return <input {...props} className={inputCheckClass} type="checkbox" ref={ref} />;
});
export default CheckBox;
