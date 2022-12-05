import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateTodo = () => {
  const [startDate, setStartDate] = useState(new Date());
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
            <input type="text" placeholder="topic here ..." />
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
            ></textarea>
          </div>
          <div className="create-input">
            <label htmlFor="">Must Complete On : </label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </div>
          <div className="create-btn">
            <button>Create TODO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
