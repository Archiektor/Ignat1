import React from "react";

import css from "./message.module.css";

type RootType = {
    user: string,
    text: string,
    time: {
        hour: number,
        minutes: number,
        period: string
    }
}

const Message: React.FC<RootType> = ({user, text, time}) => {
    return (
        <div className={css.msg_block}>
            <div className={css.user}>{user}</div>
            <div className={css.text}>{text}</div>
            <div className={css.time}>{renderTime(time)}</div>
        </div>
    )
}

type TimeType = {
    hour: number,
    minutes: number,
    period: string
}

function renderTime(obj: TimeType) {
    const {hour, minutes, period} = obj;
    return (
        `${hour}:${minutes} ${period}`
    )
}

export default Message;