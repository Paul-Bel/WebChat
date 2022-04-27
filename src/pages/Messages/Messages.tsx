import style from "../Chatpage.module.scss";
import {DateMessage} from "../../components/NewMessage/DateMessage";
import {NewMessage} from "../../components/NewMessage/NewMessage";
import {Message} from "../../components/Message/Message";
import {ResponseType} from "../../redux/messageReducer";
import {Preloader} from "../../components/Preloader/Preloader";


export const Messages = ({messages, isLoad}: { messages: Array<ResponseType>, isLoad: boolean}) => {
    return (
        <div className={style.messagesFrame}>
            {isLoad ? <Preloader/> :
                messages.map((mes, i) => {
                        const arrId = messages
                            .map((el) => el.is_new ? el.id : '' )
                            .filter((el) => el.length > 1)
                    let data = new Date(mes.created_at * 1000).toLocaleDateString()
                    return (
                        <span key={mes.id + mes.created_at}>
                            {data[i] !== data[i + 1] && <DateMessage key={mes.id + mes.message} date={data}/>}
                            {mes.id === arrId[arrId.length - 1] && <NewMessage key={mes.id + mes.created_at}/>}
                            <Message key={mes.id} id={mes.user.id} message={mes.message} is_new={mes.is_new}
                                     you={mes.user.you}
                                     name={mes.user.name} surname={mes.user.surname} avatar={mes.user.avatar}
                                     created={mes.created_at}/>
                        </span>
                    )
                }).reverse()}
        </div>
    )
}