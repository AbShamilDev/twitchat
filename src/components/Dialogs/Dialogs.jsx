import React, { useEffect, useState } from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import MessagesHeader from "./MessagesHeader/MessagesHeader"
import Chat from "./Chat/Chat"
import { useNavigate } from "react-router-dom"

const Dialogs = (props) => {
    const [activeDialog, setDialog] = useState(0)
    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} activeDialog={activeDialog} name = {d.name} setDialog={el => setDialog(el)}/>)
    const navigate = useNavigate();

    const cancelChat = () => {
        navigate('./')
        setDialog(0)
    }
    
    useEffect(()=> {navigate('./')},[])
    return (
        <div className={`${s.dialogs} ${activeDialog == 0 ? s.solo : ''}`}>
            <div className={s.users}>
                {dialogsElements}
            </div>
            <Chat cancelChat={() => {cancelChat()}} activeDialog={activeDialog} messages={props.state.messages} dialogs={props.state.dialogs}/>
        </div>
    )
}

export default Dialogs