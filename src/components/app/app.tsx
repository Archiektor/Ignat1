import React from "react";

import Surname from "../surname";
import css from "./app.module.css";
import Message from "../message";

const App = () => {
    return (
        <React.Fragment>
            <div>
                <Surname name={"Nikki"} surname={"Odd"} nationality={"PL"}/>
            </div>
            <div>
                <Message user="Nikki Odd"
                         text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut autem cum deserunt distinctio dolor doloremque esse est eveniet fuga illo iste, laboriosam laudantium magnam magni minima nobis nulla rerum sit ullam unde ut veniam veritatis! Magnam molestiae tenetur unde."}
                         time={{hour: 9, minutes: 25, period: "PM"}}/>
            </div>
        </React.Fragment>
    )
}

export default App;