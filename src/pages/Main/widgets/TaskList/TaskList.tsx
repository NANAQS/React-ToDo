import React from 'react'
import DeleteTask from '../../../../controllers/DeleteTaskController'
import { ITask } from '../../../../models/Task'
import styles from "./TaskList.module.css"

interface Props {
  taskList: ITask[]
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
  setId: React.Dispatch<React.SetStateAction<number>>
}

const TaskList = ({taskList, setTaskList, setId}: Props) => {
  return (
    <>
      {taskList.length ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h3>{task.title}</h3>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => {
                setId(task.id)
                const modal = document.querySelector("#modal")
                modal!.classList.remove("hide")
              }}></i>
              <i className='bi bi-trash' onClick={() => {
                let deleteTask = new DeleteTask(setTaskList, taskList)
                deleteTask.deleteTask(task.id)
              }}></i>
            </div>
          </div>
        ))
      ): (
        <p>Nao ha tarefas cadastradas</p>
      )}
    </>
  )
}

export default TaskList