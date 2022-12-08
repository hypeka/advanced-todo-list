import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TodoCard from "../../Component/CardComponent/TodoCard";

const AllTodo = () => {

  const navigate = useNavigate();

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
        <h4>All Todo List are here </h4>
      </div>
      <div className="todo-search">
        <input type="search" placeholder="search todo here ..." />
      </div>
      <div className="todo-main-card">
        {todo.length > 0 ? (
          todo.map((get, keys) => {
            return (
              <TodoCard createdOn={get.createdOn} topic={get.topic} mustCompleteTime={get.mustCompleteTime} about={get.about} />
            );
          })
        ) : (
          <div className="title">
            <h4>No Todo list yet !!! </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTodo;
