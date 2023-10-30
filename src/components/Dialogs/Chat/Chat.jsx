import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
const Chat = (props) => {
    return <div className={s.chat}>
        <MessagesHeader cancelChat={() => {props.cancelChat()}} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messages}>
            {props.messagesElements}
        </div>
        <div className={s.messageform} action="">
            <input placeholder="Начните писать..." onKeyUp={(el) => {if (el.key == 'Enter') el.target.value = ''}} type="text" name="" id="" />
            <button type="submit">Отправить</button>
        </div>
    </div>
}

export default Chat;