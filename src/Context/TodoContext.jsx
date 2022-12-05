import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  useEffect(() => {
    if (localStorage.getItem("todo")) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);
  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
