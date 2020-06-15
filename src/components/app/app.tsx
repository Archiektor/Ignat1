import React, {useState} from "react";

import Todolist from "../todolist";
import {v1} from "uuid";
import Experimental from "../experimental";

export type TaskType = {
    key: string,
    task: string,
    prior: string
}

const arrOfTasks: Array<TaskType> = [
    {key: '', task: `work`, prior: `high`},
    {key: '', task: `war3TFT`, prior: `low`},
    {key: '', task: `english`, prior: `mid`},
    {key: '', task: `redux`, prior: `high`},
    {key: '', task: `civ6`, prior: `low`},
    {key: '', task: `narcos`, prior: `mid`}
];

arrOfTasks.every((t) => t.key = v1());

const App = () => {
    const [tasks, setTasks] = useState(arrOfTasks);

    const deleteTask = (id: string) => {
        let arrAfterDel = tasks.filter((item) => item.task !== id);
        setTasks(arrAfterDel);
    }

    const setPriority = (priority: string) => {
        let sortArr;
        let arrWithHigh = filterByPrior("high");
        let arrWithMid = filterByPrior("mid");
        let arrWithLow = filterByPrior("low");
        sortArr = priority === "high" ? [...arrWithHigh, ...arrWithMid, ...arrWithLow] : [...arrWithLow, ...arrWithMid, ...arrWithHigh];
        setTasks(sortArr);
    }

    const filterByPrior = (typeOfPrior: string) => {
        return tasks.filter((item) => item.prior === typeOfPrior);
    }

    return (
        <React.Fragment>
            <Todolist data={tasks} deleteTask={deleteTask} setPriority={setPriority}/>
            <Experimental/>
        </React.Fragment>
    )
}

export default App;