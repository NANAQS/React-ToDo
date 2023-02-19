import React, { ChangeEvent, FormEvent } from "react"
import { ITask } from '../models/Task'

export class EditTaskController {
    private _id: number
    private _title: string
    private _difficulty: number
    private _task: ITask[]

    constructor(idProp: number, taskProp: ITask[]) {
        this._id = idProp
        this._task = taskProp
        this._title = ''
        this._difficulty = 0
    }

    editTask(e: FormEvent<HTMLFormElement>,  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>) {
        e.preventDefault();
        
        const updatedItem: ITask = {
            id: this._id,
            title: this._title,
            difficulty: this._difficulty
        }
        const updatedItems = this._task.map((task) => {
            return task.id === updatedItem.id ? updatedItem : task
        })


        setTaskList(updatedItems)
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }
    onChangeValues(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.name == "title") {
            this._title = e.target.value
        }else {
            this._difficulty = parseInt(e.target.value)
        }
    }
}