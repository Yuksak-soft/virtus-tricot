"use client";
import React from 'react';
import cls from "./style.module.scss"
import Form from '../form/form';
import { useTranslation } from 'react-i18next';

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {

    const { t } = useTranslation()

    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <h1>{t("bannerText")}</h1>
            </div>
            <div className={cls.right}>
                <Form />
            </div>
        </div>
    )

}

export default Banner;