import React from "react"
import s from '../Dialogs.module.css'

const Message = (props) => {
    return  <div id={`message-${props.index}`} className={`${s.messageWrapper} ${props.type === "self" ? s.self : ""}`}><div className={s.message}>{props.message}</div></div>
}

export default Message