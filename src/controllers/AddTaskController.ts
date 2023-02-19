import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import { ITask } from '../models/Task'

export default class AddTaskController {
    private _title: string
    private _difficulty: number
    private _setTaskList

    constructor(propTitle: string, propDifficulty: number, setTaskListProp: React.Dispatch<React.SetStateAction<ITask[]>>) {
        this._title = propTitle
        this._difficulty = propDifficulty
        this._setTaskList = setTaskListProp
    }

    onUpdate(setTitle: React.Dispatch<React.SetStateAction<string>>, 
        setDifficulty: React.Dispatch<React.SetStateAction<number>>,
        e: ChangeEvent<HTMLInputElement>) {
        if(e.target.name == "title") {
            setTitle(e.target.value)
        }else {
            setDifficulty(parseInt(e.target.value))
        }
    }
    
    onSubmit(e: FormEvent<HTMLFormElement>, taskList: ITask[],
        setTitle: React.Dispatch<React.SetStateAction<string>>, 
        setDifficulty: React.Dispatch<React.SetStateAction<number>>,) {
        e.preventDefault();
        const id = taskList.length
        const title = this._title
        const difficulty = this._difficulty
        const newTask: ITask = {id, title, difficulty}

        this._setTaskList!([...taskList, newTask])

        setTitle("")
        setDifficulty(0)

    }
}