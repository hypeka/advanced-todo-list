import React, { useContext } from "react";
import TodoCard from "../../Component/CardComponent/TodoCard";
import { TodoContext } from "../../Context/TodoContext";

const FavoriteTodo = () => {
  const [
    todo,
    setTodo,
    importantTodo,
    setImportantTodo,
    favoriteTodo,
    setFavoriteTodo,
    completedTodo,
    setCompletedTodo,
  ] = useContext(TodoContext);

  return (
    <div className="body-content">
      <div className="title">
        <h4>Favorite </h4>
      </div>
      <div className="todo-main-card">
        {favoriteTodo.length > 0 ? (
          favoriteTodo.map((get, keys) => {
            return <TodoCard createdOn={get.createdOn} topic={get.topic} mustCompleteTime={get.mustCompleteTime} about={get.about} />;
          })
        ) : (
          <div className="title">
            <h4>No favorite Todo list yet !!! </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteTodo;
