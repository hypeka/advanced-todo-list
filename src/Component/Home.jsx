import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import image from "../Assests/profile.jpg";
import { TodoContext } from "../Context/TodoContext";
import HomeRoutes from "../Routes/HomeRoutes";

const Home = () => {

  const [todo, setTodo,importantTodo,setImportantTodo,favoriteTodo,setFavoriteTodo,completedTodo,setCompletedTodo] = useContext(TodoContext)

  const navigate = useNavigate()
  const homeHandler = () => {
    navigate('/');
  }

  const allCount = todo.length;
  const importantCount = importantTodo.length;
  const favoriteCount = favoriteTodo.length;
  const completeCount = completedTodo.length;

  return (
    <>
      <div className="container">
        <div className="body-main">
          <div className="row">
            <div className="col-md-4">
              <div className="left-body">
                <div className="profile-img" onClick={homeHandler}>
                  <img src={image} alt="profile" />
                </div>
                <p>Saroj-Ghalan</p>
                <div className="left-body-content">
                  <ul>
                    <li>
                      <NavLink to="/create-todo" className="link-to">
                        <span className="span-icon">
                          <i class="fa-solid fa-plus"></i>
                        </span>
                        Create TODO
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/all-todo" className="link-to">
                        <span className="span-icon">
                          <i class="fa-solid fa-folder"></i>
                        </span>
                        {/* All {todo.length > 0 && <span className="span-count">{allCount}</span>} */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/important-todo" className="link-to">
                        <span className="span-icon">
                          <i class="fa-solid fa-bookmark"></i>
                        </span>
                        {/* Important {importantTodo.length > 0 && <span className="span-count">{importantCount}</span>} */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favorite-todo" className="link-to">
                        <span className="span-icon">
                          <i class="fa-sharp fa-solid fa-heart"></i>
                        </span>
                        {/* Favorite {favoriteTodo.length > 0 && <span className="span-count">{favoriteCount}</span>} */}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/completed-todo" className="link-to">
                        <span className="span-icon">
                          <i class="fa-solid fa-check"></i>
                        </span>
                        {/* Completed{completedTodo.length > 0 && <span className="span-count">{completeCount}</span>} */}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="right-body">
                <HomeRoutes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
