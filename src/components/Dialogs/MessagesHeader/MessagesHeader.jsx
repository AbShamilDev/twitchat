import s from '../Dialogs.module.css'


const MessagesHeader = (props) => {
    return <div className={s.messagesHeaderWrapper}>
        <span className={s.cancelArrow}>{'<-'}</span>
        <div className={s.writerWrapper}>
            <p className={s.name}>{props.name}</p>
            <p className={s.status}>Online</p>
        </div>
    </div>
}

export default MessagesHeader;