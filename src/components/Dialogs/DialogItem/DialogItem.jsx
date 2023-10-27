import React  from "react"
import s from '../Dialogs.module.css'
import { NavLink } from "react-router-dom"

const DialogItem = (props) => <div >
    <NavLink onClick={() => {props.setDialog(props.id)}} to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.user + ' ' + s.active : s.user}>{props.name}</NavLink>
</div> 

export default DialogItem