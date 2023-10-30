import s from '../Dialogs.module.css'
import cancelArrow from '../../../img/messagesImg/arrow.svg'


const MessagesHeader = (props) => {
    return <div className={s.messagesHeaderWrapper}>
        <span onClick={() => {props.cancelChat()}} className={s.cancelArrow}>
            <svg viewBox='0 0 16 16' width="16" height="16">
                {cancelArrow}
            </svg>
        </span>
        <div className={s.writerWrapper}>
            <p className={s.name}>{props.name}</p>
            <p className={s.status}>Online</p>
        </div>
    </div>
}

export default MessagesHeader;