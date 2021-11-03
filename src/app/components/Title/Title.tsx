import type { ReactNode } from 'react';
import React from 'react';
import classes from './Title.module.css';

type TitleProps = {
  children: ReactNode;
};

function Title({ children }: TitleProps): JSX.Element {
  return (
    <h1
      className={
        classes.title /*`${}` wenn es mehrere classNames gibt. dann jede ClassName in ein §{}*/
      }
    >
      {children}
    </h1>
  );
}

export default Title;
