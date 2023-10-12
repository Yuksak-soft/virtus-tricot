"use client";
import React, { useState } from 'react';
import cls from "./style.module.scss"
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';
import axios from 'axios';

interface FormProps { }

const Form: React.FC<FormProps> = () => {

    const { t } = useTranslation();

    const [inputVal, setInputVal] = useState<any>({
        name: "",
        phone: ""
    })


    const sendMessage = async () => {
        const { name, phone, comment } = inputVal;
        try {
            const texts = `Ism:${name} Raqam:${phone}`;

            await axios.get(
                `https://api.telegram.org/bot6425829985:AAHRoe4aR4g1WXU8PKSI56lcRMhDthmnr5c/sendMessage?chat_id=-1001687085192&text=${texts}`
            );
            Swal.fire({
                title: t("dialogText"),
                icon: "success"
            });
            setInputVal({ ...inputVal, name: "", phone: "" });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Ошибка...",
                text: "Попробуйте еще раз.",
            });
        }
    };


    return <div className={cls.wrapper}>
        <h1>{t("formTitle")}</h1>
        <div className={cls.inputs}>
            <div className={cls.inputWrap}>
                <input type="text" onChange={(e) => setInputVal({ ...inputVal, name: e.target.value })} value={inputVal.name} placeholder={t("name")} name="name" id="name" />
                <input type="text" onChange={(e) => setInputVal({ ...inputVal, phone: e.target.value })} value={inputVal.phone} placeholder={t("phoneNumber")} name="phone" id="phone" />
            </div>
            <button onClick={sendMessage}>{t("send")}</button>
        </div>
    </div>
}

export default Form;