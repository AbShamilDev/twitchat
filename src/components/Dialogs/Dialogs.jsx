import React, { useEffect, useState } from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import MessagesHeader from "./MessagesHeader/MessagesHeader"
import Chat from "./Chat/Chat"

const Dialogs = (props) => {
    const [activeDialog, setDialog] = useState(0)
    const dialogsElements = props.state.dialogs.map(d =>  <DialogItem id={d.id} name = {d.name} setDialog={el => setDialog(el)}/>)
    const messagesElements = props.state.messages.filter(el => el.dialogId == activeDialog).map((m, i) => <Message index={i} type={m.type} message={m.message} />)
    
    const scrollChat = () => {
        document.getElementById(`message-${(messagesElements.length - 1)}`).scrollIntoView()
    }

    useEffect(() => {if (messagesElements.length !== 0) scrollChat();})
    
    return (
        <div className={`${s.dialogs} ${activeDialog == 0 ? s.solo : ''}`}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <Chat activeDialog={activeDialog} messagesElements={messagesElements} dialogs={props.state.dialogs}/>
        </div>
    )
}

export default Dialogs