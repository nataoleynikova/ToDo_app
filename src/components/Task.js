import React from "react";

const Task = ({task, ...props}) => {
  const ActionBtn = () => 
  <div className="action_btn">
    {!task.done ? (
      <p onClick={props.doneTask}>Yes</p> 
    ) : ( 
      <p onClick={props.deleteTask}>No</p> 
    )}
  </div>;

  const className = 'task ' + (task.done ? "task_done" : '')

  return(
    <div className="className">
      <a>{task.title}</a>
      <ActionBtn></ActionBtn>
    </div> 
  );
};

export default Task;