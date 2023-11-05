// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), description: newTask, isDone: false } });
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
