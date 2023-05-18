import React, { useState } from "react";
import styled from "styled-components";

const TodoListContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TodoButton = styled.button`
  background-color: #ffcc00;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  span {
    flex-grow: 1;
    margin-right: 10px;
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  }

  button {
    background-color: #ff0033;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
  }
`;

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoListContainer>
      <Title>Todo List</Title>
      <TodoInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
      <TodoButton onClick={handleAddTodo}>Add</TodoButton>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <span>{todo.text}</span>
            <button onClick={() => handleToggleComplete(todo.id)}>Complete</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </TodoItem>
        ))}
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
