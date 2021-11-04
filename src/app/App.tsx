import React from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Todo from './components/Todo/Todo';
import TaskList from './components/TaskList/TaskList';
import AddToDo from './components/AddToDo/AddToDo';

function App(): JSX.Element {
  return (
    <>
      <Title>To Do List</Title>
      <AddToDo />
      <Todo
        // isDone={true}
        title={'Schuhe putzen'}
        description={'Schuhe im Flur'}
      ></Todo>
      <Todo
        // isDone={false}
        title={'Katze streicheln'}
        description={'Miau Miau'}
      ></Todo>
      <Todo
        // isDone={true}
        title={'Kuchen backen'}
        description={'yum yum yum'}
      ></Todo>
      <Todo
        // isDone={false}
        title={'Reifen wechseln'}
        description={'Winterreifen aufzeihen'}
      ></Todo>
      <Todo
        // isDone={true}
        title={'Webentwickler werden'}
        description={'...'}
      ></Todo>
      {/* <Todo isDone={false} title={'Mama anrufen'} description={'...'}></Todo> */}
    </>
  );
}

export default App;
