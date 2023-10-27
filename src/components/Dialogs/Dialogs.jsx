import React, { useState } from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import MessagesHeader from "./MessagesHeader/MessagesHeader"

const Dialogs = (props) => {
    const [activeDialog, setDialog] = useState(0)
    const dialogsElements = props.state.dialogs.map(d =>  <DialogItem id={d.id} name = {d.name} setDialog={el => {setDialog(el)}}/>)
    const messagesElements = props.state.messages.filter(el => {console.log(el.dialogId);return el.dialogId == activeDialog}).map(m => <Message type={m.type} message={m.message} />)
    console.log(activeDialog)
    console.log(messagesElements)
    return (
        <div className={`${s.dialogs} ${activeDialog == 0 ? s.solo : ''}`}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <MessagesHeader />
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs