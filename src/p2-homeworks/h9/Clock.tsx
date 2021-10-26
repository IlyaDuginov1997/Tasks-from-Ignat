import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(false);


    const stop = () => {
        clearTimeout(timerId);
        setDisable(false);
    };


    const start = () => {
        stop();
        setDisable(true);
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    };


    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = date.toLocaleTimeString();
    const stringDate = date.toLocaleDateString();

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start} disabled={disable}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;