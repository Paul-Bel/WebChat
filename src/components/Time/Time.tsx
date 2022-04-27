import style from "../ChatItem/ChatItem.module.scss";
import mesSend from '../../constants/img/ico/message.png'

let defaultTime = '12:07'
export const Time = ({time = defaultTime, outgoing}: { time: string, outgoing: boolean }) => {

    return (

        <span className={style.chatTimeMessage}>{time}
            {outgoing &&
                // <img className={style.img} src={mesSend} alt="Ok"/>
                <span className={style.img}
                      style={{
                          backgroundImage: `url(${mesSend})`,
                          color: 'transparent ',
                          backgroundRepeat: 'no-repeat'
                      }}>del</span>
            }</span>

    )
}

