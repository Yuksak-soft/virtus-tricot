import React from 'react';
import cls from "./style.module.scss"
import { useTranslation } from 'react-i18next';

interface FormProps { }

const Form: React.FC<FormProps> = () => {

    const { t } = useTranslation()

    return <div className={cls.wrapper}>
        <h1>{t("formTitle")}</h1>
        <form className={cls.inputs}>
            <input type="text" placeholder={t("name")} name="" id="" />
            <input type="text" placeholder={t("phoneNumber")} name="" id="" />
            <button>{t("send")}</button>
        </form>
    </div>
}

export default Form;