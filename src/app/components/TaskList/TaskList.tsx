import React from 'react';
import classes from './TaskList.module.css';
import type { ReactNode } from 'react';

type TaskListProps = {
  children: ReactNode;
};

function TaskList({ children }: TaskListProps): JSX.Element {
  return (
    <ul className={classes.tasklist} id="tasklist">
      {children}
    </ul>
  );
}

export default TaskList;
