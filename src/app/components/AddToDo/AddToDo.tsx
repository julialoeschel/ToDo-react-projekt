import React from 'react';
import classes from './AddToDo.module.css';

import { useState } from 'react';

type AddToDoProps = {
  onSubmitfromApp: (arg1: {
    isDone: boolean;
    title: string;
    description: string;
  }) => void;
};

function AddToDo({ onSubmitfromApp }: AddToDoProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDiscription] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitfromApp({
      isDone: false,
      title,
      description,
    });
  }

  return (
    <form className={classes.AddToDo} onSubmit={(event) => handleSubmit(event)}>
      <label className={classes.input}>
        Whats the task?
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label className={classes.input}>
        describe the task
        <textarea
          value={description}
          onChange={(event) => setDiscription(event.target.value)}
          cols={50}
          rows={1}
        ></textarea>
      </label>
      <label>
        <input type="submit" />
      </label>
    </form>
  );
}

export default AddToDo;
