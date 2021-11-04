import React from 'react';
import Title from './components/Title/Title';
import Todo from './components/Todo/Todo';
import AddToDo from './components/AddToDo/AddToDo';
import { useState } from 'react';

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      isDone: true,
      title: 'Schuhe putzen',
      description: 'Schuhe im Flur',
    },
    {
      isDone: false,
      title: 'Katze streicheln',
      description: 'Miau miau',
    },
  ]);

  function addToDoItem(todo: {
    title: string;
    description: string;
    isDone: boolean;
  }) {
    setTodos([todo, ...todos]);
  }

  return (
    <>
      <Title>To Do List</Title>
      <AddToDo onSubmitfromApp={addToDoItem} />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          isDone={todo.isDone}
        ></Todo>
      ))}
    </>
  );
}

export default App;
