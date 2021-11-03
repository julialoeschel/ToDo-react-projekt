import React from 'react';

import Todo from './components/Todo/Todo';

function App(): JSX.Element {
  return (
    <Todo
      isDone={true}
      title={'Schuhe putzen'}
      description={'Schuhe im Flur'}
    ></Todo>
  );
}

export default App;
