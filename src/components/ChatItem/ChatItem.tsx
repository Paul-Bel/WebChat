import style from './ChatItem.module.scss'
import {Time} from "../Time/Time";

type ChatItemPropsType = {
    id: string
    title: string
    avatar: string
    message: string
    active: boolean
    callBack: (id: string) => void
}

export const ChatItem = (props: ChatItemPropsType) => {
    const {title, avatar, message, callBack, id, active} = {...props}
    const onClickHandler = () => {
        callBack(id)
    }
    return (
        <div className={active ? style.chatItemContainer + ' ' + style.active : style.chatItemContainer}
             onClick={onClickHandler}
        >
            <img className={style.imgChat} src={avatar} alt="img"/>
            <div className={style.descriptionGroup}>
                <div className={style.chatName}>
                    <b className={style.lastName}>{title}</b>
                    <span className={style.chatTimeMessage}><Time time={'12:07'} outgoing={false}/></span>
                </div>
                <div className={style.chatDescription}>{message}</div>
            </div>
        </div>
    )
}