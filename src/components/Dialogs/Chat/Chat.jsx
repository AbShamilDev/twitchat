import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
import MessageInput from "../MessageInput/MessageInput"
import { useEffect, useState } from "react"
import Message from "../Message/Message"

let oldMessageId;
let loaded = false;
const Months = {
    0:'января',
    1:'февраля',
    2:'марта',
    3:'апреля',
    4:'мая',
    5:'июнь',
    6:'июля',
    7:'августа',
    8:'сентября',
    9:'октября',
    10:'ноября',
    11:'декабря'
}

const Chat = (props) => {
    const [messagesElements, setMessageElements] = useState('')
    let lastMessageId, debounce = false;

    const LoadMessages = () => {
        let currentDate = '', level = -1;
        const elementsArr = [], resultArr = []
        props.messages.filter(el => el.dialogId == props.activeDialog).forEach((m, i, self) => {
            if (m === self.at(-1)) lastMessageId = i;
            if (self.length !== 0 && i !== 0 && currentDate == m.date)
                elementsArr[level].push(<Message index={i} type={m.type} message={m.message} time={m.time} />)
            else {
                elementsArr.push([])
                elementsArr[++level].push(<span className={s.dateSpanNatural}><div>{m.date}</div></span>)
                elementsArr[level].push(<span className={s.dateSpan}><div>{m.date}</div></span>)
                elementsArr[level].push(<Message index={i} type={m.type} message={m.message} time={m.time} />)
                currentDate = m.date
            }
        })
        
        elementsArr.forEach(el => resultArr.push(<div>{el}</div>))
        return resultArr
    }

    const sendMessage = (message) => {
        let date = new Date()
        props.messages.push(
            { id: messagesElements.length,
              dialogId: props.activeDialog,
              message: message,
              type: 'self',
              date: `${date.getDate()} ${Months[date.getMonth()]}`,
              time: `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours() }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
            })
        setMessageElements(LoadMessages())
    }

    const scrollChat = () => document.getElementById(`message-${(oldMessageId)}`).scrollIntoView()

    // проверка на новый чат
    useEffect(() => {
        const newMessages = LoadMessages();
        loaded = true
        if (lastMessageId !== oldMessageId) {setMessageElements(newMessages); loaded = false; oldMessageId = lastMessageId}
        if (messagesElements.length&& loaded && lastMessageId == oldMessageId) scrollChat();
    })
    
    const onScrollChat = (el) => {
        
        el.target.classList.add(s.aa)
        setTimeout(() => {if (!debounce) {debounce = 1; el.target.classList.remove(s.aa)}}, 1000)
        
    }

    return <div className={s.chat}>
        <MessagesHeader cancelChat={() => { props.cancelChat() }} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messagesWrapper} onScroll={(el) => {console.log('scroll')}}>
            <div className={s.messages} >
                {messagesElements}
            </div>
        </div>
        <MessageInput sendMessage={(message) => {sendMessage(message)}}/>
    </div>
}

export default Chat;