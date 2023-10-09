"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { translationsRu, translationsUz } from "../../i18n/i18n";
import { Select } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

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
                    <Link href="https://www.facebook.com/virtustricotltd/">
                        <FontAwesomeIcon icon={faFacebook} className={cls.faIcon} style={{ width: 24, height: 24 }}
                        ></FontAwesomeIcon>
                    </Link>


                    <Link href="https://www.youtube.com/@virtustricot5715/">
                        <FontAwesomeIcon icon={faYoutube} className={cls.faIcon} style={{ width: 24, height: 24 }}
                        ></FontAwesomeIcon>
                    </Link>
                    <Link href="https://www.instagram.com/virtustricot.uz/">
                        <FontAwesomeIcon icon={faInstagram} className={cls.faIcon} style={{ width: 24, height: 24 }}
                        ></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
            <div className={cls.right}>
                <div className={cls.location}>
                    <Image src="/location.svg" alt='location' width={20} height={20} />
                    <p>{t("address")}</p>
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
                    <Link style={{ textDecoration: "none" }} className={cls.mediaPhoneIcon} href="tel: +998715007888">
                        <FontAwesomeIcon icon={faPhone} width={18} height={18} />
                    </Link>
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