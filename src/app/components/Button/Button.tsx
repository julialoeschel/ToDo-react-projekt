import type { ReactNode } from 'react';
import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
};
function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button
      className={
        classes.button /*`${}` wenn es mehrere classNames gibt. dann jede ClassName in ein §{}*/
      }
    >
      {children}
    </button>
  );
}

export default Button;
