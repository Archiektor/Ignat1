import React from 'react';

import css from './app.module.css';
import {Route} from 'react-router';
import Prejunior from '../prejunior';
import Navbar from '../navbar';
import Junior from '../junior/junior';
import JuniorAdvanced from '../junior+/juniorAdvanced';

const App = () => {
    return (
        <div className={css.wrapper}>
            <Navbar/>
            <Route path='/preJunior' render={() => <Prejunior/>}/>
            <Route path='/Junior' render={() => <div><Junior/></div>}/>
            <Route path='/Junior+' render={() => <div><JuniorAdvanced/></div>}/>

        </div>
    )
}

export default App;