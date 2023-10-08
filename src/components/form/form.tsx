import React from 'react';
import cls from "./style.module.scss"

interface FormProps { }

const Form: React.FC<FormProps> = () => {

    return <div className={cls.wrapper}>
        <h1>Форма контакт</h1>
        <form className={cls.inputs}>
            <input type="text" placeholder='Ism' name="" id="" />
            <input type="text" placeholder='Telefon Raqam' name="" id="" />
            <button>Отправить</button>
        </form>
    </div>
}

export default Form;