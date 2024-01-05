import React from "react"
import s from '../Dialogs.module.css'

const Message = (props) => {
    return <div id={`message-${props.index}`} className={`${s.messageWrapper} ${props.type === "self" ? s.self : ""}`}>
        <p className={s.message}>{props.message}
            <span className={s.time}>
                {props.time}
            </span>
        </p>
    </div>
}

export default Message