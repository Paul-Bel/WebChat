import style from './Message.module.scss'
import {Time} from "../Time/Time";

type MessagePropsType = {
    id: string
    message: string
    is_new: boolean
    you: boolean
    name: string
    surname: string
    avatar: string
    created: number
}

export const Message = (props: MessagePropsType) => {
    const {message, you, name, surname, avatar, created} = {...props}
    let date = new Date(created * 1000)
    //.toLocaleDateString()
    let hour = date.getHours()
    let minutes = date.getMinutes().toString().length < 2 ? 0 + date.getMinutes().toString() : date.getMinutes()
    let localDate = `${hour}:${minutes}`
    return (
        <div className={you ? style.messageContainer + " " + style.myMessage : style.messageContainer}>
            {!you && <img className={style.avatar} src={avatar} alt="ava"/>}
            <div className={style.profileMessage}>
                {!you && <h4 className={style.nickName}>`${name} ${surname}`</h4>}
                <span className={you ? style.message + " " + style.myMessage : style.message}>
                        <span>{message}</span>
                    <span className={style.time} style={you ? {width: '69px'} : {}}>
                    {you && <u className={style.isEdited}>Edited</u>}
                        <Time time={localDate} outgoing={you}/>
                </span>
                </span>
            </div>
        </div>
    )
}