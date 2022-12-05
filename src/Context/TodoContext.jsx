import React, { useState, createContext, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todo, setTodo] = useState([]);
  const [importantTodo , setImportantTodo] = useState([]);
  const [favoriteTodo , setFavoriteTodo] = useState([]);
  const [completedTodo , setCompletedTodo] = useState([]);

  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  useEffect(() => {
    if (importantTodo.length > 0) {
      localStorage.setItem("importantTodo", JSON.stringify(importantTodo));
    }
  }, [importantTodo]);
  
  useEffect(() => {
    if (favoriteTodo.length > 0) {
      localStorage.setItem("favoriteTodo", JSON.stringify(favoriteTodo));
    }
  }, [favoriteTodo]);

  useEffect(() => {
    if (completedTodo.length > 0) {
      localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
    }
  }, [completedTodo]);

  useEffect(() => {
    if (localStorage.getItem("todo")) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("importantTodo")) {
      setImportantTodo(JSON.parse(localStorage.getItem("importantTodo")));
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("favoriteTodo")) {
      setFavoriteTodo(JSON.parse(localStorage.getItem("favoriteTodo")));
    }
  }, []);
  useEffect(() => {
    if (localStorage.getItem("completedTodo")) {
      setCompletedTodo(JSON.parse(localStorage.getItem("completedTodo")));
    }
  }, []);
  return (
    <TodoContext.Provider value={[todo, setTodo,importantTodo,setImportantTodo,favoriteTodo,setFavoriteTodo,completedTodo,setCompletedTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};
