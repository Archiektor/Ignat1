import React from "react";

import css from "./surname.module.css";

type RootType = {
    name: string,
    surname: string,
    nationality: string
}

const Surname: React.FC<RootType> = ({name, surname, nationality}) => {
    return (
        <div>
            <p className={css.text}>Hello, my name is <span className={css.name}>{name} {surname}</span></p>
        </div>
    )
}

export default Surname;