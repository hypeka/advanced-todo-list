import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Swal from "sweetalert2";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const TodoCard = (props) => {
  const { enqueueSnackbar } = useSnackbar();
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

  const importantHandler = (e, title) => {
    e.preventDefault();
    if (importantTodo.find((item) => item.topic === title)) {
      enqueueSnackbar("Sorry already in important", { variant: "error" });
    } else {
      let Important = todo.find((item) => item.topic === title);
      setImportantTodo([...importantTodo, Important]);
      Swal.fire({
        title: "Important",
        text: "TODO has been added to important",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
      navigate("/important-todo");
    }
  };

  const favoriteHandler = (e,title) =>{
    e.preventDefault();
    if(favoriteTodo.find((item) => item.topic === title)){
      enqueueSnackbar("Sorry already in favorite", { variant: "error" });
    }else{
      console.log("I am present")
      let favorite = todo.find((item) => item.topic === title);
      setFavoriteTodo([...favoriteTodo,favorite])
      Swal.fire({
        title: "Favorite",
        text: "TODO has been added to favorite",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
      navigate('/favorite-todo')
    }
  }

  console.log("complete todo : ",completedTodo)
  const completeHandler = (e,title) =>{
    e.preventDefault();
    // if(favoriteTodo.find((item) => item.topic === title)){
    //   enqueueSnackbar("Sorry already in favorite", { variant: "error" });
    // }else{
      console.log("I am present")
      let completed = todo.find((item) => item.topic === title);
      console.log()
      setCompletedTodo([...completedTodo,completed])
      Swal.fire({
        title: "Completed",
        text: "TODO has been completed ",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
      navigate('/completed-todo')
    // }
  }

  const removeHandler = (e, title) => {
    e.preventDefault();
    console.log("I am clicked");
    let temp = [...todo];
    let temp1 = [...importantTodo];
    let temp2 = [...favoriteTodo];
    let temp3 = [...completedTodo];
    let tempData = temp.filter((item) => item.topic !== title);
    let tempData1 = temp1.filter((item) => item.topic !== title);
    let tempData2 = temp2.filter((item) => item.topic !== title);
    let tempData3 = temp3.filter((item) => item.topic !== title);
    setTodo(tempData);
    setImportantTodo(tempData1);
    setFavoriteTodo(tempData2);
    setCompletedTodo(tempData3);
    Swal.fire({
      title: "Removed",
      text: "TODO has been removed to successfully",
      icon: "success",
      confirmButtonText: "OK",
      timerProgressBar: true,
      timer: 5000,
    });
  };

  return (
    <div className="todo-card">
      <div className="row">
        <div className="col-md-9">
          <div className="card-content">
            <p className="created-at">Created at : {props.createdOn}</p>
            <h3>{props.topic}</h3>
            <p className="about-card">{props.about}</p>
            <p className="created-at">
              Must Complete On : {props.mustCompleteTime}
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <ul>
            <li className="card-li">
              <p
                className="card-p"
                onClick={(e) => importantHandler(e, props.topic)}
              >
                <span>
                  <i class="fa-solid fa-bookmark"></i>
                </span>{" "}
                Add to Important
              </p>
            </li>
            <li className="card-li">
              <p className="card-p" onClick={(e) => favoriteHandler(e, props.topic)}>
                <span>
                  <i class="fa-sharp fa-solid fa-heart"></i>
                </span>{" "}
                Add to Favorite
              </p>
            </li>
            <li className="card-li">
              <p className="card-p" onClick={(e) => completeHandler(e, props.topic)} >
                <span>
                  <i class="fa-solid fa-check"></i>
                </span>
                Complete
              </p>
            </li>
            <li className="card-li">
              <p
                className="card-p"
                onClick={(e) => removeHandler(e, props.topic)}
              >
                <span>
                  <i class="fa-solid fa-trash"></i>
                </span>
                Remove
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
