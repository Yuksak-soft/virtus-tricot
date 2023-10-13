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
    lng: "ru",
    fallbackLng: "ru",
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
                <Image src="/logo.png" alt='logo' width={100} height={40} />
                <div className={cls.icons}>
                    <Link href="https://www.instagram.com/virtustricot.uz/">
                        <Image src="/instagram.png" alt='instagram' width={30} height={30} />
                    </Link>
                    <Link href="https://www.youtube.com/@virtustricot5715/">
                        <Image src="/youtube.png" alt='youtube' width={30} height={30} />
                    </Link>
                    <Link href="https://t.me/gendirector_virtustricot">
                        <Image src="/telegram.png" alt='telegram' width={24} height={24} />
                    </Link>
                    <Link href="https://www.facebook.com/virtustricotltd/">
                        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
                    </Link>
                </div>
            </div>
            <div className={cls.right}>
                <div className={cls.location}>
                    <Link className={cls.locationLink} href="https://yandex.com/maps/org/53361172391/?ll=69.250939%2C41.256332&z=15.88">
                        <Image src="/location.svg" alt='location' width={20} height={20} />
                        <p>{t("address")}</p>
                    </Link>
                </div>
                <div className={cls.selectWrap}>
                    <Select
                        defaultValue="ru"
                        className={cls.languageSelector}
                        style={{ width: 120, }}
                        onChange={handleChange}
                        options={[
                            { value: 'uz', label: <span style={{ fontSize: 16 }}><span style={{ fontSize: 12 }}>UZ</span> 🇺🇿</span> },
                            { value: 'ru', label: <span style={{ fontSize: 16 }}><span style={{ fontSize: 12 }}>RU</span> 🇷🇺</span> },
                        ]}
                    />
                    <Link style={{ textDecoration: "none" }} className={cls.mediaPhoneIcon} href="tel: +998555007888">
                        <FontAwesomeIcon icon={faPhone} width={18} height={18} />
                    </Link>
                </div>
                <Link style={{ textDecoration: "none" }} href="tel: +998555007888">
                    <button className={cls.navbarBtn}>
                        <Image src="/phone.svg" alt='phone' width={18} height={18} />
                        (55) 500-78-88
                    </button>
                </Link>
            </div>
        </div>
    )


}

export default Navbar;