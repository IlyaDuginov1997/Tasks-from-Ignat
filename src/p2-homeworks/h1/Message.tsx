import React from 'react'
import classes from './Message.module.css'

type propsMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsMessageType) {

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.image}>
                    <img src={props.avatar}/>
                </div>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.message}>
                    {props.message}
                </div>
                <div className={classes.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message;
