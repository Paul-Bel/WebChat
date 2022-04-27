import style from './Preloader.module.scss'


export const Preloader = () => {

    return(
        <div className={style.balls}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}