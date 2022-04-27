import style from './Header.module.scss';
import iconMessage from '../../constants/img/ico/Shape.png'

export const Header = () => {

    return (
        <div className={style.headerContainer}>
            <div className={style.headerMessage}>
            <span className={style.headerChatItem}>
                <img src={iconMessage} alt="ico"/>
                <h4>Great Project</h4>
            </span>
            </div>
        </div>
    )
}