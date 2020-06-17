import React from "react";

import css from "./navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={css.wrapper}>
            <div className={css.item}><NavLink className={css.link} activeClassName={css.activeLink}
                                               to="/preJunior">preJunior</NavLink>
            </div>
            <div className={css.item}><NavLink className={css.link} activeClassName={css.activeLink}
                                               to="/Junior">Junior</NavLink>
                <span className={css.arrow}>...</span></div>
            <div className={css.item}><NavLink className={css.link} activeClassName={css.activeLink}
                                               to="/Junior+">Junior+</NavLink></div>
        </nav>
    )
}

export default Navbar;