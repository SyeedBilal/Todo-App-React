import React from "react";
import { TodoItemsProvider } from "../Store/todo-items-store";
import Input from "./Input";
import ListItem from "./ListItem";
import Heading from "./HeadingCompo";
import styles from "./items.module.css";

function App() {
  return (
    <TodoItemsProvider>
      <div className="flex items-start justify-center h-screen">
        <div className={styles["itemscontainer"]}>
          <Heading />
          <Input />
          <ListItem />
        </div>
      </div>
    </TodoItemsProvider>
  );
}

export default App;
