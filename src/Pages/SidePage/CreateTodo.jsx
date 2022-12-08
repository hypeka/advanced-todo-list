import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContext";

const CreateTodo = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [about, setAbout] = useState("");
  const [date ,setDate] = useState(new Date());

  const [todo, setTodo,importantTodo,setImportantTodo,favoriteTodo,setFavoriteTodo,completedTodo,setCompletedTodo] = useContext(TodoContext);

  const createTodoHandler = (e) => {
    e.preventDefault();
    if (topic === "" || about === "") {
      Swal.fire({
        title: "Sorry ! ",
        text: "Empty field detected !",
        icon: "error",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
    } else {
      setTodo([...todo,{
        topic:topic,
        about:about,
        mustCompleteTime:startDate.toLocaleDateString(),
        createdOn: date.toLocaleDateString(),
      }]);
      Swal.fire({
        title: "Wow",
        text: "TODO has been created successfully",
        icon: "success",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
      navigate('/all-todo');
    }
  };

  console.log("time is : ",date)

  return (
    <>
      <div className="body-content">
        <div className="title">
          <h4>Create Todo</h4>
        </div>
        <div className="create-main">
          <div className="create-input">
            <label htmlFor="">Topic : </label>
            <br />
            <input
              type="text"
              placeholder="topic here ..."
              value={topic}
              // onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="create-input">
            <label htmlFor="">About : </label>
            <br />
            <textarea
              name=""
              id=""
              cols="60"
              rows="2" 
              placeholder="write description about ..."
              value={about}
              // onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="create-input">
            <label htmlFor="">Must Complete On : </label>
            <br />
            <DatePicker
              selected={startDate}
              // onChange={(date: Date) => setStartDate(date)}
            />
          </div>
          <div className="create-btn">
            {/* <button onClick={(e) => createTodoHandler(e)}>Create TODO</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
