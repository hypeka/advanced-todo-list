import React from "react";
import { NavLink } from "react-router-dom";
import image from "../Assests/profile.jpg";
import HomeRoutes from "../Routes/HomeRoutes";


const Home = () => {
  return (
    <>
      <div className="container">
        <div className="body-main">
          <div className="row">
            <div className="col-md-4">
              <div className="left-body">
                <div className="profile-img">
                  <img src={image} alt="profile" />
                </div>
                <p>Saroj-Ghalan</p>
                <div className="left-body-content">
                  <ul>
                    <li>
                      <NavLink to="/create-todo">
                        <div className="button">
                          <button>Create TODO</button>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/important-todo" className="link-to">
                        Important <span></span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/favorite-todo" className="link-to">
                        Favorite
                      </NavLink>
                      <span></span>
                    </li>
                    <li>
                      <NavLink to="/all-todo" className="link-to">
                        All
                      </NavLink>
                      <span></span>
                    </li>
                    <li>
                      <NavLink to="/completed-todo" className="link-to">
                        Completed<span></span>
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
