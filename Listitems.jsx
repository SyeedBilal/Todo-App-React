import React, { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";

const ListItem = () => {
  const { todoItems, deleteTodoItem } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.Todo}
          todoDate={item.Date}
          onDeleteClick={deleteTodoItem}
        />
      ))}
    </>
  );
};

export default ListItem;
