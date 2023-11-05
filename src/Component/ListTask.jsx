// ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';

const ListTask = ({ filterDone }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = filterDone
    ? tasks.filter((task) => task.isDone)
    : tasks.filter((task) => !task.isDone);

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onEdit={(newDescription) => handleEditTask(task.id, newDescription)} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
};
export default ListTask;