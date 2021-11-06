import React from 'react';
import classes from './AddToDo.module.css';
import { useState } from 'react';

type AddToDoProps = {
  onSubmitfromApp: (arg1: {
    isDone: boolean;
    title: string;
    description: string;
    id: number;
  }) => void;
};

function AddToDo({ onSubmitfromApp }: AddToDoProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDiscription] = useState('');
  const [id, setId] = useState(0);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmitfromApp({
      isDone: false,
      title,
      description,
      id,
    });
    setTitle('');
    setDiscription('');
    setId(id + 1);
    console.log(id);
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
      <label className={classes.submitlabel}>
        <input type="submit" value="Add Task" className={classes.submit} />
      </label>
    </form>
  );
}

export default AddToDo;
