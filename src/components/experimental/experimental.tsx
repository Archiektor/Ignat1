import React, {KeyboardEvent, MouseEvent} from "react";

import css from "./experimental.module.css";
import UserButton from "../userButton";
import UserInput from "../userInput";

type ExperimentalType = {
    data: {
        error: string | undefined,
        text: string,
        onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
        setText: (text: string) => void,
        onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void,
    }
}

const Experimental: React.FC<ExperimentalType> = ({data}) => {
    return (
        <div className={css.wrapper}>
            <UserInput onEnter={data.onEnter} error={data.error} value={data.text} setText={data.setText}/>
            <UserButton onClickHandler={data.onClickHandler} btnName={`Gently`} error={data.error}/>
        </div>
    )
}

export default Experimental;