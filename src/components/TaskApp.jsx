import React, { useState } from "react";
import { v4 } from "uuid";
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import taskData from "../data/tasks.json";

const TaskApp = () => {
  const [tasks, setTasks] = useState(taskData);

  const addTask = (newTask) => {
    let isTaskPresent = tasks.some((task) => task.text === newTask);
    if (newTask && !isTaskPresent) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleUpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, curr) => {
      if (curr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    setTasks([...newTasks]);
  };

  const handleRemoveTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div data-cy="task-app" className={styles.main}>
      <div className={styles.taskApp}>
        <TaskHeader tasks={tasks} />
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          handleUpdateTask={handleUpdateTask}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};

export default TaskApp;
