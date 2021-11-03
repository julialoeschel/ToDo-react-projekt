import React, { useState } from 'react';
import classes from './Todo.module.css';

type ToDoProps = {
  title: string;
  description: string;
};

function Todo({ title, description }: ToDoProps): JSX.Element {
  const [isItDone, setisDone] = useState(false);

  function unDo() {
    setisDone(!isItDone);
  }

  return (
    <div
      onClick={() => unDo()}
      className={`${classes.todo} ${isItDone ? classes.green : classes.red}`}
    >
      <h2 className={classes.h2}>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

export default Todo;
