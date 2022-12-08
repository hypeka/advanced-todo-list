import React, {useContext} from 'react';
import { TodoContext } from '../../Context/TodoContext';
import TodoCard from '../../Component/CardComponent/TodoCard';

const ImportantTodo = () => {

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
        <h4>Important </h4>
      </div>
      <div className="todo-main-card">
        {importantTodo.length > 0 ? (
          importantTodo.map((get, keys) => {
            return (
              <TodoCard createdOn={get.createdOn} topic={get.topic} mustCompleteTime={get.mustCompleteTime} about={get.about} />
            );
          })
        ) : (
          <div className="title">
            <h4>No Important Todo list yet !!! </h4>
          </div>
        )}
      </div>
      </div>
  )
}

export default ImportantTodo