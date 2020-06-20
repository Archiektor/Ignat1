import React from "react";

import css from "./app.module.css";
import {Route} from "react-router";
import Prejunior from "../prejunior";
import Navbar from "../navbar";

const App = () => {
    return (
        <div className={css.wrapper}>
            <Navbar/>
            <Route path='/preJunior' render={() => <Prejunior></Prejunior>}/>
            <Route path='/Junior' render={() => <div>5-8</div>}/>
            <Route path='/Junior+' render={() => <div>9-12</div>}/>

        </div>
    )
}

export default App;