"use client"
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface ClientsProps { }

const Clients: React.FC<ClientsProps> = () => {

    const { t } = useTranslation()

    return <div className={cls.wrapper}>
        <div className={cls.title}>
            <h1>{t("clients")}</h1>
            <div className={cls.line}></div>
            <p>{t("clientsText")}</p>
        </div>
        <div className={cls.brands}>
            <div className={cls.sectionTop}>
                <div className={cls.brandWrap}>
                    <Image src="/brand1.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand2.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand3.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand4.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand5.svg" alt="brand" fill />
                </div>
            </div>
            <div className={cls.section}>
                <div className={cls.brandWrap}>
                    <Image src="/brand6.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand7.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand8.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand9.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand10.svg" alt="brand" fill />
                </div>
            </div>
        </div>
    </div>

}

export default Clients;