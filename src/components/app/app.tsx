import React, {KeyboardEvent, MouseEvent, useState} from "react";
import {v1} from "uuid";
import Experimental from "../experimental";
import Message from "../message";
import Surname from "../surname";
import Todolist from "../todolist";

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
    const [error, setError] = useState<string | undefined>("");
    const [text, setText] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const setDefault = (str: string) => {
        setError(str);
        str.length && setTimeout(() => setError(""), 2200);
        setText("");
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            alert("Hitted");
            if (e.currentTarget.value.trim().length === 0) {
                setDefault("Invalid text");
            } else {
                setResult(text);
                setDefault("");
            }
        }
    }

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        alert("Hitted");
        if (text.trim().length === 0) {
            setDefault("Invalid text");
        } else {
            setResult(text);
            setDefault("");
        }
    }

    const data = {
        onEnter,
        onClickHandler,
        setText,
        error,
        text,
    }

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
            <Message user={"Nikki"} text={"Hello, amigos !"} time={{hour: 11, minutes: 30, period: "AM"}}/>
            <Surname name={"Niki"} surname={"Odd"} nationality={"PLN"}/>
            <Todolist data={arrOfTasks} deleteTask={deleteTask} setPriority={setPriority}/>
            <Experimental data={data}/>

        </React.Fragment>
    )
}

export default App;