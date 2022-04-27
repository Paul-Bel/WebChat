import style from "../Chatpage.module.scss";
import {ChatItem} from "../../components/ChatItem/ChatItem";
import {ChatResponseType} from "../../redux/chatsReducer";
import {Preloader} from "../../components/Preloader/Preloader";

type ChatsPageType = {
    chats: Array<ChatResponseType>, isLoad: boolean,
    activeChat: string, callback: (id: string) => void
}
export const ChatsPage = (props: ChatsPageType) => {
    const {chats, callback, activeChat, isLoad} = {...props}
    return (
        <div className={style.chatsContainer}>
            <div className={style.headerChat}>
                <span className={style.ChatTitle}>All chats</span>
            </div>
            <div className={style.chatContainer}>
                {isLoad ? <Preloader/> :
                    chats.map(chat => {
                        return <ChatItem key={chat.id} avatar={chat.avatar} title={chat.title}
                                         callBack={callback} id={chat.id}
                                         message={chat.last_message.message} active={activeChat === chat.id}/>
                    })}
            </div>
        </div>

    )
}