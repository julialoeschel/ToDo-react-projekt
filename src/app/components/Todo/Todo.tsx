import React from 'react';
import classes from './Todo.module.css';

type ToDoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function Todo({ isDone, title, description }: ToDoProps): JSX.Element {
  return (
    <div className={`${classes.todo} ${isDone ? classes.green : classes.red}`}>
      <h2 className={classes.h2}>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

export default Todo;
