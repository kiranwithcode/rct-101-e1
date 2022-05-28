import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let totalTask = tasks?.length;
  let unCompletedTask = tasks.filter((task) => !task.done).length;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <span>
        You have <b data-cy="header-remaining-task">{unCompletedTask}</b> of{" "}
        <b data-cy="header-total-task">{totalTask}</b> tasks remaining
      </span>
    </div>
  );
};

export default TaskHeader;
