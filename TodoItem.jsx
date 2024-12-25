import React from "react";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="list-item-container flex justify-between">
      <h3>{todoName}</h3>
      <h3>{todoDate}</h3>
      <button onClick={() => onDeleteClick(todoName)} className="bg-red-500 text-white px-4 py-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
