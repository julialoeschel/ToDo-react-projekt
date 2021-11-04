import React from 'react';
import classes from './AddToDo.module.css';
import Button from '../Button/Button';

function AddToDo(): JSX.Element {
  return (
    <form className={classes.AddToDo} action="">
      <label>
        Whats the task?
        <input type="text" />
      </label>

      <label>
        describe the task
        <textarea cols={50} rows={1}></textarea>
      </label>
      <Button className={`${classes.button} ${classes.submit}`}>Submit</Button>
    </form>
  );
}

export default AddToDo;
