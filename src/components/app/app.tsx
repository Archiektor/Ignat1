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
{/*            <div>
                <Surname name={"Nikki"} surname={"Odd"} nationality={"PL"}/>
            </div>
            <div>
                <Message user="Nikki Odd"
                         text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate enim, excepturi fugit impedit laborum optio quasi. Architecto asperiores debitis quisquam! Ducimus exercitationem illo laborum mollitia nesciunt non praesentium voluptatem. Asperiores beatae consectetur cum cumque debitis delectus dignissimos doloribus eaque eveniet explicabo fugiat fugit hic illo laborum nam officia optio pariatur, placeat quas quos soluta ut veritatis! Asperiores at consequuntur culpa deserunt dolore enim, est, et explicabo facere iure non numquam quis repudiandae rerum similique sint ut? Aliquid beatae debitis dolores eligendi ipsum laborum libero maxime molestiae nobis pariatur, quasi, ut vero voluptatibus? Adipisci facere hic tenetur vitae. Animi, doloribus?`}
                         time={{hour: 9, minutes: 25, period: "PM"}}/>
                <Message user="Nikki Odd"
                         text={`Lorem ipsum dolor sit amet.`}
                         time={{hour: 9, minutes: 25, period: "PM"}}/>
            </div>*/}
            <Todolist data={tasks} deleteTask={deleteTask} setPriority={setPriority}/>
            <Experimental />
        </React.Fragment>
    )
}

export default App;