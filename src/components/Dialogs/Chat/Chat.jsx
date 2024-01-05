import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
import MessageInput from "../MessageInput/MessageInput"
import { useEffect, useState } from "react"
import Message from "../Message/Message"

let oldMessageId;
let loaded = false;
const Months = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июнь',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря'
}

const debounce = (fn, ms) => {
    let TimeOut;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(TimeOut)
        TimeOut = setTimeout(fnCall, ms)
    }
}

const Chat = (props) => {
    const [messagesElements, setMessageElements] = useState('')
    let lastMessageId

    const LoadMessages = () => {
        let currentDate = '', level = -1;
        const elementsArr = [], resultArr = []
        props.messages.filter(el => el.dialogId === props.activeDialog).forEach((messageObj, i, self) => {
            if (messageObj === self.at(-1)) lastMessageId = i;
            if (self.length !== 0 && i !== 0 && currentDate == messageObj.date)
                elementsArr[level].push(<Message index={i} type={messageObj.type} message={messageObj.message} time={messageObj.time} />)
            else {
                elementsArr.push([])
                elementsArr[++level].push(<span className={s.dateSpan}><div>{messageObj.date}</div></span>)
                elementsArr[level].push(<Message index={i} type={messageObj.type} message={messageObj.message} time={messageObj.time} />)
                currentDate = messageObj.date
            }
        })

        elementsArr.forEach(el => resultArr.push(<div>{el}</div>))
        return resultArr
    }

    const sendMessage = (message) => {
        if (!message) return;
        let date = new Date()
        props.messages.push(
            {
                id: messagesElements.length,
                dialogId: props.activeDialog,
                message: message,
                type: 'self',
                date: `${date.getDate()} ${Months[date.getMonth()]}`,
                time: `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
            })
        setMessageElements(LoadMessages())
    }

    const scrollToBottom = () => document.getElementById(`message-${(oldMessageId)}`).scrollIntoView()

    // проверка на новый чат
    useEffect(() => {
        LoadMessages();
        loaded = true
        if (lastMessageId !== oldMessageId) { setMessageElements(LoadMessages()); loaded = false; oldMessageId = lastMessageId }
        if (messagesElements.length && loaded && lastMessageId == oldMessageId) scrollToBottom();
    })

    const hideDate = debounce(
        (element) => {
            if (element) {
                element.classList.remove(s.Show)
                element.classList.add(s.Hide)
            }
        }, 1000
    )

    const onScrollChat = (event) => {
        const messages = document.getElementsByClassName(s.messages)[0].children
        const offset = messages[0].offsetTop
        let visElement;
        for (let i = 0; i < messages.length; i++) {
            // if (messages[i].children[0].classList[1] !== s.Show) messages[i].children[0].classList.add(s.Show)
            if (event.target.scrollTop > messages[i].offsetTop - offset + 35) visElement = messages[i].children[0]
        }

        visElement && visElement.classList.remove(s.Hide)
        hideDate(visElement)
    }

    return <div className={s.chat}>
        <MessagesHeader cancelChat={() => { props.cancelChat() }} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messagesWrapper} onScroll={onScrollChat}>
            <div className={s.messages} >
                {messagesElements}
            </div>
        </div>
        <MessageInput sendMessage={(message) => { sendMessage(message) }} />
    </div>
}

export default Chat;