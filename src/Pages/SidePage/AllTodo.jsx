import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";

const AllTodo = () => {
  const [todo, setTodo,importantTodo,setImportantTodo,favoriteTodo,setFavoriteTodo,completedTodo,setCompletedTodo] = useContext(TodoContext);

  

  const importantHandler = (e,title) => {
    console.log(title)
    e.preventDefault();
    let Important = todo.filter(item => item.title === title);
    // setImportantTodo(Important);
    console.log(Important)
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
                      <p className="created-at">Must Complete On : {get.mustCompleteTime}</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <ul>
                      <li className="card-li">
                        <p className="card-p" onClick={(e) => importantHandler(e,get.topic)}>
                          <span>
                            <i class="fa-solid fa-bookmark"></i>
                          </span>{" "}
                          Add to Important
                        </p>
                      </li>
                      <li className="card-li">
                        <p className="card-p">
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
