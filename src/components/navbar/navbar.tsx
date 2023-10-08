"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { translationsRu, translationsUz } from "../../i18n/i18n";
import { Select } from 'antd';
import Link from 'next/link';

interface NavbarProps { }

i18n.use(initReactI18next).init({
    resources: {
        uz: { translation: translationsUz },
        ru: { translation: translationsRu },
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
});


const Navbar: React.FC<NavbarProps> = () => {

    const { t, i18n } = useTranslation();

    const handleChange = (value: string) => {
        i18n.changeLanguage(value)
    };



    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <Image src="/logo.svg" alt='logo' width={118} height={50} />
                <div className={cls.icons}>
                    <Image src="/facebook.svg" alt='instagram' width={24} height={24} />
                    <Image src="/youtube.svg" alt='instagram' width={24} height={24} />
                    <Image src="/instagram.svg" alt='instagram' width={24} height={24} />
                </div>
            </div>
            <div className={cls.right}>
                <div className={cls.location}>
                    <Image src="/location.svg" alt='location' width={20} height={20} />
                    <p>Usa, San Fransisco, St22</p>
                </div>
                <div className={cls.selectWrap}>
                    <Select
                        defaultValue="uz"
                        style={{ width: 100 }}
                        onChange={handleChange}
                        options={[
                            { value: 'uz', label: "uz" },
                            { value: 'ru', label: 'ru' },
                        ]}
                    />
                </div>
                <Link style={{ textDecoration: "none" }} href="tel: +998715007888">
                    <button className={cls.navbarBtn}>
                        <Image src="/phone.svg" alt='phone' width={18} height={18} />
                        (71) 500-78-88
                    </button>
                </Link>
            </div>
        </div>
    )


}

export default Navbar;