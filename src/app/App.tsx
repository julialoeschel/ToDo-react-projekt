import React from 'react';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import AddToDo from './components/AddToDo/AddToDo';

function App(): JSX.Element {
  function addToDoItem(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    console.log(todo);
  }

  return (
    <>
      <Title>To Do List</Title>
      <AddToDo onSubmitfromApp={addToDoItem} />
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
      {}
    </>
  );
}

export default App;
