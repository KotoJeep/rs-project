import React, { FC } from 'react';
import cn from 'classnames';
import './Button.scss';

export type ButtonProps = React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, ...props }: ButtonProps) => {
  const btnClasses = cn('button', `${className}`, { button__disabled: props.disabled });
  return (
    <button className={btnClasses} disabled={props.disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
