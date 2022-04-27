import style from './Newmessage.module.scss'

export const Newmessage = () => {

    return(
        <>
        <div className={style.NewMessageContainer}>
            <span>Новые сообщения</span>
        </div>

            <div className={style.dataContainer}>
                <span className={style.date}>11.02.2021</span>
            </div>
        </>
    )
}