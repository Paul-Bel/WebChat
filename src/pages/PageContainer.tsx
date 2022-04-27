import style from './Chatpage.module.scss'
import iconMessage from "../constants/img/ico/Shape.png";
import {InputCustom} from "../components/Input/InputCustom";
import {useEffect, useState} from "react";
import {ChatResponseType, setChat_TC} from "../redux/chatsReducer";
import {useAppDispatch} from "../redux/hooks";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {ResponseType, setMessage_TC} from "../redux/messageReducer";
import {ChatsPage} from "./Chats/ChatsPage";
import {Messages} from "./Messages/Messages";

export const PageContainer = () => {
    const dispatch = useAppDispatch()
    const dataChat = useSelector<AppStateType, ChatResponseType[]>(state => state.chat.response)
    const dataMessage = useSelector<AppStateType, Array<ResponseType>>(state => state.message.response)
    const isLoadChat = useSelector<AppStateType, boolean>(state => state.chat.isLoad)
    const isLoadMes = useSelector<AppStateType, boolean>(state => state.message.isLoadMes)
    const [activeChat, setActiveChat] = useState<string>('')
    const setMessageCallback = (id: string) => {
        dispatch(setMessage_TC(id))
        setActiveChat(id)
    }
    useEffect(() => {
        dispatch(setChat_TC())
    }, [])
    return (
        <div className={style.chatPageContainer}>
            <ChatsPage callback={setMessageCallback} chats={dataChat} activeChat={activeChat} isLoad={isLoadChat}/>
            <div className={style.messageContainer}>
                <div className={style.headerMessageContainer}>
                 <span className={style.headerChatItem}>
                    <img src={iconMessage} alt="ico"/>
                    <h4>Great Project</h4>
                </span>
                </div>
                <div className={style.messagesGroup}>
                    <Messages messages={dataMessage} isLoad={isLoadMes}/>
                    <InputCustom value={''}/>
                </div>
            </div>
        </div>
    )
}