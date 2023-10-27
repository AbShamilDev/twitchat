import MessagesHeader from "../MessagesHeader/MessagesHeader"
import s from '../Dialogs.module.css'
const Chat = (props) => {
    return <div className={s.chat}>
        <MessagesHeader setDialog={el => props.setDialog(el)} name={props.activeDialog !== 0 ? props.dialogs[props.activeDialog - 1].name : ''} />
        <div className={s.messages}>
            {props.messagesElements}
        </div>
    </div>
}

export default Chat;