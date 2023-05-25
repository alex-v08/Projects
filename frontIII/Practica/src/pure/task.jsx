import React from "react";
import PropTypes from "prop-types";
import { Task } from "../models/task.class";

const TaskComponent = ({task}) => {
  return <div>
  
          <h2>Nombre: {task.name}</h2>
          <h3>Descripcion:{task.description}</h3>
          <h4>Estado: {task.status}</h4>
          <h5>Severidad: {task.severity}</h5>
          <h5>this task is:{task.completed ? 'COMPLETED':'PENDING'}</h5>
  </div>;
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent;
