import Header from "./Header"
import React, { useState } from 'react';
import Todo from "./Todo";
function App() {
  const [todoContent, setTodoContent] = useState('');
  const [todos, setTodos] = useState([
    { content: 'Wake up', id: 1 },
    { content: 'Take a bath', id: 2 },
    { content: 'Go to school', id: 3 },
  ]);

  const addTodo = (e) => {
    setTodos([...todos, { content: todoContent, id: todos.length + 1 }])
    setTodoContent('');
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const editTodo = (id, newContent) => {
    const updatedTodos = [...todos];
    const todoIndex = updatedTodos.findIndex(todo => todo.id === id);
    updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], content: newContent };
    setTodos(updatedTodos);
  }
  return (
    <>
      <Header />
      <input
        type="text"
        value={todoContent}
        onChange={e => setTodoContent(e.target.value)} />
      <br />
      <br />
      <button className="add" onClick={addTodo}>Add new todo.</button>
      {todos.map((todo) => (
        <Todo key={todo.id}
          content={todo.content}
          id={todo.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo} />
      ))}
    </>
  );

}
export default App