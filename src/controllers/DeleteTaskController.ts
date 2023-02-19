import React from 'react'
import { ITask } from '../models/Task'

export default class DeleteTask {
    private  _setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>
    private  _oldTaskList: ITask[]

    constructor(setTaskListProp: React.Dispatch<React.SetStateAction<ITask[]>>, 
        oldTaskListProp: ITask[]) {
        this._setTaskList = setTaskListProp
        this._oldTaskList = oldTaskListProp
    }

    deleteTask(id: number) {
        this._setTaskList(
            this._oldTaskList.filter(task => {
                return task.id != id
          })
        )
    }
}