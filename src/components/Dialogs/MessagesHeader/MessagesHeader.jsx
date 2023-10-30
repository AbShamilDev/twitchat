import s from '../Dialogs.module.css'

const MessagesHeader = (props) => {
    return <div className={s.messagesHeaderWrapper}>
        <div onClick={() => {props.cancelChat()}} className={s.cancel}>
            <span>{'<'} Назад</span>
        </div>
        <div className={s.writerWrapper}>
            <p className={s.name}>{props.name}</p>
            <p className={s.status}>Online</p>
        </div>
    </div>
}

export default MessagesHeader;