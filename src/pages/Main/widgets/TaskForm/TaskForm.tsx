import React, {useState, ChangeEvent, FormEvent } from 'react'
import styles from "./TaskForm.module.css"

import { ITask } from '../../../../models/Task'
import AddTaskController from '../../../../controllers/AddTaskController'

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, setTaskList, taskList}: Props) => {

  
  const [difficulty, setDifficulty] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  
  let controller = new AddTaskController(title, difficulty, setTaskList!)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => controller.onSubmit(e, taskList, setTitle, setDifficulty)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => controller.onUpdate(setTitle, setDifficulty, e)

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Titulo</label>
        <input type="text" value={title} name="title" placeholder="Titulo da tarefa" onChange={handleChange} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input type="number" value={difficulty} name="difficulty" placeholder="Dificuldade da tarefa" onChange={handleChange} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm