import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
import MessageInput from "../MessageInput/MessageInput"
import { useEffect, useState } from "react"
import Message from "../Message/Message"
const Chat = (props) => {
    const [messagesElements, setMessageElements] = useState('')

    // проверка на новый чат
    useEffect(() => {
        const newMessages = props.messages.filter(el => el.dialogId == props.activeDialog).map((m, i) => <Message index={i} type={m.type} message={m.message} />);
        if (newMessages.length !== messagesElements.length) if (newMessages.length !== 0 && newMessages[0] !== messagesElements[0]) setMessageElements(newMessages)
    })
    console.log([...messagesElements, <Message index={messagesElements[messagesElements.length - 1].props.index + 1} type={'self'} message={"sss"}/>])
    const sendMessage = (message) => {
        setMessageElements ([...messagesElements, <Message index={messagesElements[messagesElements.length - 1].props.index + 1} type={'self'} message={message}/>])
    }

    const scrollChat = () => {
        document.getElementById(`message-${(messagesElements.length - 1)}`).scrollIntoView()
    }
    
    useEffect(() => {if (messagesElements.length !== 0) scrollChat();})

    return <div className={s.chat}>
        <MessagesHeader cancelChat={() => { props.cancelChat() }} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messagesWrapper}>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
        <MessageInput sendMessage={(message) => {sendMessage(message)}}/>
    </div>
}

export default Chat;