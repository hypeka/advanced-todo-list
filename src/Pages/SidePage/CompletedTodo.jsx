import React, {useContext} from 'react';
import TodoCard from '../../Component/CardComponent/TodoCard';
import { TodoContext } from '../../Context/TodoContext';

const CompletedTodo = () => {

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
        <h4>Completed </h4>
      </div>
      <div className="todo-main-card">
        {completedTodo.length > 0 ? (
          completedTodo.map((get, keys) => {
            return (
              <TodoCard createdOn={get.createdOn} topic={get.topic} mustCompleteTime={get.mustCompleteTime} about={get.about} />
            );
          })
        ) : (
          <div className="title">
            <h4>Todo hasn't completed yet !!! </h4>
          </div>
        )}
      </div>
      </div>
  )
}

export default CompletedTodo