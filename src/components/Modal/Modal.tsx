import React, { ChangeEvent, FormEvent } from 'react'
import { ITask } from '../../models/Task'

import styles from "./Modal.module.css"
import stylesForm from "../../pages/Main/widgets/TaskForm/TaskForm.module.css"

import { EditTaskController } from "../../controllers/EditTaskController"

interface Props {
    task: ITask[]
    setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
    id: number
}

const Modal = ({task, setTaskList, id}: Props) => {

    const closeModal = (e: React.MouseEvent): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }

    
    const constroller = new EditTaskController(id, task)
    const handleSubmitController = (e: FormEvent<HTMLFormElement>) => constroller.editTask(e, setTaskList)
    const handleChangeController = (e: ChangeEvent<HTMLInputElement>) => constroller.onChangeValues(e)

  return (
    <div id='modal' className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <h2>Texto Modal</h2>
            <form onSubmit={handleSubmitController} className={stylesForm.form}>
            <div className={stylesForm.inputContainer}>
                <label htmlFor="title">Titulo</label>
                <input type="text" onChange={handleChangeController} name="title" placeholder="Titulo da tarefa" />
            </div>
            <div className={stylesForm.inputContainer}>
                <label htmlFor="difficulty">Dificuldade</label>
                <input type="number" onChange={handleChangeController} name="difficulty" placeholder="Dificuldade da tarefa" />
            </div>
            <input type="submit" value="Editar" />
            </form>
        </div>
    </div>
  )
}

export default Modal