"use client";
import React, { FormEvent, useState } from 'react';
import cls from "./style.module.scss"
import { useTranslation } from 'react-i18next';

interface FormProps { }

const Form: React.FC<FormProps> = () => {

    const { t } = useTranslation();

    const [inputVal, setInputVal] = useState<any>({
        name: "",
        phone: ""
    })


    const handleInputVal = () => {
        setInputVal({ ...inputVal, name: "", phone: "" })
    }

    return <div className={cls.wrapper}>
        <h1>{t("formTitle")}</h1>
        <div className={cls.inputs}>
            <input type="text" onChange={(e) => setInputVal({ ...inputVal, name: e.target.value })} value={inputVal.name} placeholder={t("name")} name="name" id="name" />
            <input type="text" onChange={(e) => setInputVal({ ...inputVal, phone: e.target.value })} value={inputVal.phone} placeholder={t("phoneNumber")} name="phone" id="phone" />
            <button onClick={handleInputVal}>{t("send")}</button>
        </div>
    </div>
}

export default Form;