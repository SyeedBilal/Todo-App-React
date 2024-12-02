/*import React, { createContext, useState } from "react";

// Create the context
export const TodoItemsContext = createContext();

// Create a provider component
export const TodoItemsProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([
    { Todo: "Go to school", Date: "2024-11-01" },
  ]);

  // Function to add a new todo item
  const addTodoItem = (newTodo) => {
    setTodoItems((prevItems) => [...prevItems, newTodo]);
  };

  // Function to delete a todo item
  const deleteTodoItem = (todoName) => {
    setTodoItems((prevItems) =>
      prevItems.filter((item) => item.Todo !== todoName)
    );
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addTodoItem, deleteTodoItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
*/


//  *****************-----------USING USE REDUCER HOOK FOR MORE OPTIMIZATION ------**********

import { createContext, useReducer } from "react";

// Create the context
export const TodoItemsContext = createContext();

// Define the reducer function
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]; // Add a new To-Do item
    case "DELETE_TODO":
      return state.filter((item) => item.Todo !== action.payload); // Remove a To-Do item
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

// Context Provider Component
export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoReducer, []); // Initialize reducer

  // Dispatch actions for adding and deleting items
  const addTodoItem = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const handleOnDelete = (todoName) => {
    dispatch({ type: "DELETE_TODO", payload: todoName });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addTodoItem, handleOnDelete }}>
      {children}
    </TodoItemsContext.Provider>
  );
};
