import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  console.log("favoriteTodo : ",favoriteTodo)

  const {enqueueSnackbar} = useSnackbar();

  const importantHandler = (e, title) => {
    e.preventDefault();
    if (importantTodo.find((item) => item.topic === title)) {
      enqueueSnackbar("Sorry already in important", { variant: "error" });
    } else {
      let Important = todo.find((item) => item.topic === title);
      setImportantTodo([...importantTodo,Important]);
      Swal.fire({
        title: "Important",
        text: "TODO has been added to important",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
      navigate('/important-todo')
    }
  };

  const favoriteHandler = (e,title) =>{
    e.preventDefault();
    // if(favoriteTodo.find((item) => item.topic === title)){
    //   enqueueSnackbar("Sorry already in favorite", { variant: "error" });
    // }else{
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
    // }
  }

  const removeHandler = (e, title) => {
    e.preventDefault();
    console.log("I am clicked")
    let temp = [...todo];
    let tempData = temp.filter(item => item.topic !== title);
    setTodo(tempData);
    Swal.fire({
      title: "Removed",
      text: "TODO has been removed to successfully",
      icon: "success",
      confirmButtonText: "OK",
      timerProgressBar: true,
      timer: 5000,
    });
  }

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
              <div className="todo-card" key={keys}>
                <div className="row">
                  <div className="col-md-9">
                    <div className="card-content">
                      <p className="created-at">Created at : {get.createdOn}</p>
                      <h3>{get.topic}</h3>
                      <p className="about-card">{get.about}</p>
                      <p className="created-at">
                        Must Complete On : {get.mustCompleteTime}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <ul>
                      <li className="card-li">
                        <p
                          className="card-p"
                          onClick={(e) => importantHandler(e, get.topic)}
                        >
                          <span>
                            <i class="fa-solid fa-bookmark"></i>
                          </span>{" "}
                          Add to Important
                        </p>
                      </li>
                      <li className="card-li">
                        <p className="card-p" onClick={(e) => favoriteHandler(e,get.topic)}>
                          <span>
                            <i class="fa-sharp fa-solid fa-heart"></i>
                          </span>{" "}
                          Add to Favorite
                        </p>
                      </li>
                      <li className="card-li">
                        <p className="card-p">
                          <span>
                            <i class="fa-solid fa-check"></i>
                          </span>
                          Complete
                        </p>
                      </li>
                      <li className="card-li">
                        <p className="card-p" onClick={(e)=>removeHandler(e,get.topic)}>
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
