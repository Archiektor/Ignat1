import React from "react";

import css from "./todolist.module.css";
import {TaskType} from "../prejunior/prejunior";

type RootType = {
    data: Array<TaskType>;
    deleteTask: (id: string) => void,
    setPriority: (p: string) => void,
}

let renderedTasks = (arr: Array<TaskType>, deleteTask: (id: string) => void) => {
    return arr.map((t) => {
        const {key, task, prior} = t;
        return (
            <li className={css.item} key={key}>
                <span>{`${task.charAt(0).toUpperCase()}${task.slice(1)}`}</span>
                <span>{`  : ${prior}`}</span>
                <button className={css.deleteBtn} onClick={() => deleteTask(task)}></button>
            </li>
        )
    })
}

const Todolist: React.FC<RootType> = ({data, deleteTask, setPriority}) => {
    return (
        <div className={css.todolist}>
            <ul className={css.list}>
                {renderedTasks(data, deleteTask)}
            </ul>
            <div className={css.btnBlock}>
                <button className={css.btn} onClick={() => setPriority("high")}>Sort by HighP</button>
                <button className={css.btn} onClick={() => setPriority("low")}>Sort by LowP</button>
            </div>
        </div>
    )
}

export default Todolist;