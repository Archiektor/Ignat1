import React, {useState} from "react";

import css from "./experimental.module.css";
import {v1} from "uuid";

type PersonType = {
    id: string,
    name: string
}

let names: Array<PersonType> = [];

const Experimental = () => {
    const [name, setName] = useState("");

    const showMsg = () => {
        if (name.length > 0) {
            alert(`Hola, amigos ${name}`);
            setName("");
            let newPerson = {
                id: v1(),
                name
            };
            names.push(newPerson);
        }
    }

    return (
        <div className={css.wrapper}>
            <input className={css.field} value={name}
                   onChange={(e) => setName(e.currentTarget.value.trim())}
                   onKeyPress={(e) => e.key === "Enter" && showMsg()}
            />
            <button className={css.btn}
                    onClick={() => showMsg()}>{`Gently`}
            </button>
            <span className={css.decor}>{names.length}</span>
        </div>
    )
}

export default Experimental;