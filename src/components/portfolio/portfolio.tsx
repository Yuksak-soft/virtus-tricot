"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {

    const { t } = useTranslation()


    return <div className={cls.wrapper}>
        <h1>{t("portfolio")}</h1>
        <div className={cls.products}>
            <div className={cls.section1}>
                <Image src="/1.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/2.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/3.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/4.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
            </div>
            <div className={cls.section2}>
                <div className={cls.line}></div>
                <Image src="/5.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/6.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/7.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/8.svg" alt='item' width={340} height={200} />
            </div>
        </div>
    </div>
}

export default Portfolio;