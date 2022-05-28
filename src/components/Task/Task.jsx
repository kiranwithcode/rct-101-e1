import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";

import removeIcon from "../../assets/remove.svg";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  const toggleTaskStatus = () => {
    let toggledTask = {
      ...task,
      done: !task.done,
    };
    handleUpdateTask(toggledTask);
  };

  const updateCount = (newCount) => {
    if (newCount > 0) {
      let updatedCountTask = {
        ...task,
        count: newCount,
      };
      handleUpdateTask(updatedCountTask);
    }
  };

  return (
    <li data-cy="task" className={styles.task}>
      <input
        type="checkbox"
        data-cy="task-checkbox"
        checked={task.done}
        onChange={toggleTaskStatus}
      />
      <div data-cy="task-text">{task.text}</div>
      <Counter count={task.count} updateCount={updateCount} />
      <button
        data-cy="task-remove-button"
        onClick={() => handleRemoveTask(task.id)}
        className={styles.removeButton}
      >
        <img src={removeIcon} alt="Remove button text" />
      </button>
    </li>
  );
};

export default Task;
