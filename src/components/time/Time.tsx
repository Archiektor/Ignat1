import React, {useState} from 'react';
import s from './Time.module.scss';
import CustomButton from '../common/customButton/customButton';

const Time = () => {
    const [date, setDate] = useState<Date>(new Date());
    const [timerId, setTimerId] = useState<number>(0);
    const [style, setStyle] = useState<string>(s.timeBlock__date);

    const timeWithZero = (time: number): string | number => time >= 0 && time < 10 ? `0${time}` : time

    let today = date;
    let minutesWithZero = timeWithZero(today.getMinutes());
    let secondsWithZero = timeWithZero(today.getSeconds());
    let time = today.getHours() + ':' + minutesWithZero + ':' + secondsWithZero;
    let todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const startTimer = () => {
        clearInterval(timerId);
        let intervalId: number = window.setInterval(() => setDate(new Date()), 1000);
        setTimerId(intervalId);
    }

    const stopTimer = () => clearInterval(timerId);

    return (
        <div className={s.timeBlock}>
            <div onMouseEnter={() => setStyle(s.timeBlock__date_hover)} onMouseLeave={() => setStyle(s.timeBlock__date)}>
                <div className={s.timeBlock__time_text}>{`Current time: `}</div>
                <div className={s.timeBlock__time}>{time}</div>
            </div>
            <div className={style}>
                <div>{`Current date: `}</div>
                <div className={s.timeBlock__dateText}>{todayDate}</div>
            </div>
            <CustomButton onClickFn={startTimer}>Start timer</CustomButton>
            <CustomButton onClickFn={stopTimer}>Stop timer</CustomButton>
        </div>
    )
}

export default Time;