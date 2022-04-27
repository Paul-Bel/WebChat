import React, {FocusEvent, useState} from 'react';
import style from './InputCustome.module.scss';
import clip from '../../constants/img/ico/clip.png'
import send from '../../constants/img/ico/Send.png'

let locPlaceholder: string = 'Type message';
let plugCallBack = () => {
}
export const InputCustome =
    ({value, onChange = plugCallBack, placeholder = locPlaceholder}:
         { value: string | null, placeholder?: string; onChange?: (value: string | null) => void, }) => {
        const [defaultValue, setDefaultValue] = useState<boolean>(false)
        const [defaultPlaceholder, setDefaultPlaceholder] = useState<string>(placeholder)
        const onClickFocus = () => {
            //clean placeholder
            setDefaultPlaceholder('')
            setDefaultValue(true)
        }
        const onClickHandler = (e: FocusEvent<HTMLDivElement>) => {
            onChange(e.currentTarget.textContent)
        }
        const focusOut = () => {
            if (!value?.trim()) {
                //set placeholder
                setDefaultPlaceholder(placeholder)
                setDefaultValue(false)
            }
        }
        return (
            <div className={style.inputContainer}>
                <div contentEditable
                     className={defaultValue ? style.input : style.input + ' ' + style.defaultInput}
                     onBlur={focusOut} onInput={onClickHandler} onClick={onClickFocus}
                     suppressContentEditableWarning={true}
                     dangerouslySetInnerHTML={{__html: defaultPlaceholder}}
                />
                <div className={style.buttonGroup}>
                    <label className={style.nameButtonFile} style={{backgroundImage: `url(${clip})`}}><input
                        className={style.buttonFile} type="file"/></label>
                    <label className={style.nameButtonFile}>
                        <input className={style.buttonSend}
                               style={{backgroundImage: `url(${send})`}}
                               type="button"/></label>
                </div>


            </div>

        );

    }

