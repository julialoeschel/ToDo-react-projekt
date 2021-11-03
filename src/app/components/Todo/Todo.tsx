import React from 'react';
import classes from './Todo.module.css';

type ToDoProps = {
  isDone: boolean;
  title: string;
  description: string;
};

function Todo(props: ToDoProps): JSX.Element {
  return (
    <div
      className={`${classes.todo} ${
        props.isDone ? classes.green : classes.red
      }`}
    >
      {props.isDone}
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </div>
  );
}

export default Todo;
