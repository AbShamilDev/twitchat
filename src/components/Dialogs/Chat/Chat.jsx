import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
import SendIcon from "../svg/SendIcon"
import MessageInput from "../MessageInput/MessageInput"
import { useState } from "react"
import Message from "../Message/Message"
const Chat = (props) => {
    const [messagesElements, setMessagesElements] = useState(props.messagesElements)
    const sendMessage = (message) => {
        setMessagesElements([...messagesElements, <Message index={messagesElements[messagesElements.length - 1].props.index - 1} type={'self'} message={message}/>])
    }

    return <div className={s.chat}>
        <MessagesHeader cancelChat={() => { props.cancelChat() }} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messagesWrapper}>
            <div className={s.messages}>
                {props.messagesElements}
            </div>
        </div>
        <MessageInput sendMessage={(message) => {sendMessage(message)}}/>
    </div>
}

export default Chat;