import React from "react";

import css from "./app.module.css";
import {Route} from "react-router";
import Prejunior from "../prejunior";
import Navbar from "../navbar";
import Junior from "../junior/junior";

const App = () => {
    return (
        <div className={css.wrapper}>
            <Navbar/>
            <Route path='/preJunior' render={() => <Prejunior/>}/>
            <Route path='/Junior' render={() => <div><Junior/></div>}/>
            <Route path='/Junior+' render={() => <div>9-12</div>}/>

        </div>
    )
}

export default App;