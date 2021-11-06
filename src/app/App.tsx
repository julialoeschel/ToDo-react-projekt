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
      id: 999,
    },
    {
      isDone: false,
      title: 'Katze streicheln',
      description: 'Miau miau',
      id: 99,
    },
  ]);

  function addToDoItem(todo: {
    title: string;
    description: string;
    isDone: boolean;
    id: number;
  }) {
    setTodos([todo, ...todos]);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  return (
    <>
      <Title>To Do List</Title>
      <AddToDo onSubmitfromApp={addToDoItem} />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          /*isDone={todo.isDone}*/
          id={todo.id}
          onDelete={deleteTodo}
        ></Todo>
      ))}
    </>
  );
}

export default App;
