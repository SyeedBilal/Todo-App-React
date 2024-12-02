import React, { useState, useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import { IoIosAdd } from "react-icons/io";

/* function Input() {
  const [todoInput, setTodoInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const { addTodoItem } = useContext(TodoItemsContext);

  const handleAddTodo = () => {
    if (todoInput && dateInput) {
      addTodoItem({ Todo: todoInput, Date: dateInput });
      setTodoInput(""); // Clear the inputs
      setDateInput("");
    }
  };

  return (
    <div className="input-field flex flex-col md:flex-row justify-between gap-3 mt-5 p-5 bg-gray-100 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter Todo here"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="w-full md:w-1/2 border border-sky-500 p-2 bg-gray-800 text-white placeholder-gray-400 rounded"
      />
      <input
        type="date"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        className="w-full md:w-1/3 border border-sky-500 p-2 bg-gray-800 text-white placeholder-gray-400 rounded"
      />
      <button onClick={handleAddTodo} className="bg-white text-black px-4 py-2 rounded">
        <IoIosAdd />
      </button>
    </div>
  );
}

export default Input; */



// *************--------   USING USE REDUCER HOOK FOR BETTER OPTIMIZATION ------------******

function Input() {
  const [state, dispatch] = useReducer(reducer, initialState); // Initialize the reducer
  const { addTodoItem } = useContext(TodoItemsContext); // Consume the context

  const handleAddTodo = () => {
    if (state.todoInput && state.dateInput) {
      addTodoItem({ Todo: state.todoInput, Date: state.dateInput });
      dispatch({ type: "RESET" }); // Clear the input fields
    }
  };

  return (
    <div className="input-field flex flex-col md:flex-row justify-between gap-3 mt-5 p-5 bg-gray-100 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Enter Todo here"
        value={state.todoInput}
        onChange={(e) =>
          dispatch({ type: "SET_TODO", payload: e.target.value })
        }
        className="w-full md:w-1/2 border border-sky-500 p-2 bg-gray-800 text-white placeholder-gray-400 rounded"
      />
      <input
        type="date"
        value={state.dateInput}
        onChange={(e) =>
          dispatch({ type: "SET_DATE", payload: e.target.value })
        }
        className="w-full md:w-1/3 border border-sky-500 p-2 bg-gray-800 text-white placeholder-gray-400 rounded"
      />
      <button
        onClick={handleAddTodo}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
