import style from './Newmessage.module.scss'

export const DateMessage = ({date}: { date: string }) => {

    return (
        <div className={style.dataContainer}>
            <span className={style.date}>{date}</span>
        </div>
    )
}