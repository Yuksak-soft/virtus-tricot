"use client";
import React, { useState } from 'react';
import cls from "./style.module.scss"
import Form from '../form/form';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';
import { Button, Modal } from 'antd';
import Image from 'next/image';

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {

    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <h1>{t("bannerText")}</h1>
            </div>
            <div className={cls.right}>
                <Form />
            </div>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ style: { display: "none" } }} cancelButtonProps={{ style: { display: "none" } }}>
                <div className={cls.modalWrap}>
                    <Form />
                </div>
            </Modal>
            <div className={cls.btnWrap}>
                <button onClick={showModal}><FontAwesomeIcon icon={faPhone} width={18} height={18} /> {t("mobie_send")}</button>
                <div className={cls.icons}>
                    <Link href="https://www.instagram.com/virtustricot.uz/">
                        <Image src="/instagram.png" alt='instagram' width={24} height={24} />
                    </Link>
                    <Link href="https://www.youtube.com/@virtustricot5715/">
                        <Image src="/youtube.png" alt='youtube' width={24} height={24} />
                    </Link>
                    <Link href="https://t.me/gendirector_virtustricot">
                        <Image src="/telegram.png" alt='telegram' width={24} height={24} />
                    </Link>
                    <Link href="https://www.facebook.com/virtustricotltd/">
                        <Image src="/facebook.png" alt='facebook' width={24} height={24} />
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Banner;