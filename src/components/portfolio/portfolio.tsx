"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {

    const { t } = useTranslation()

    const propsSection1 = useSpring({
        loop: true,
        config: { duration: 10000 },
        to: async (next) => {
            while (true) {
                await next({ transform: 'translateX(-100%)' });
                await next({ transform: 'translateX(100%)' });
            }
        },
    });

    const propsSection2 = useSpring({
        loop: true,
        config: { duration: 10000 },
        to: async (next) => {
            while (true) {
                await next({ transform: 'translateX(100%)' });
                await next({ transform: 'translateX(-100%)' });
            }
        },
    });


    return <div className={cls.wrapper}>
        <h1>{t("portfolio")}</h1>
        <div className={cls.centerLine}></div>
        <div className={cls.products}>
            <animated.div style={propsSection2} className={cls.section1}>
                <Image src="/1.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/2.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/3.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/4.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
            </animated.div>
            <animated.div style={propsSection1} className={cls.section2}>
                <div className={cls.line}></div>
                <Image src="/5.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/6.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/7.svg" alt='item' width={340} height={200} />
                <div className={cls.line}></div>
                <Image src="/8.svg" alt='item' width={340} height={200} />
            </animated.div>
        </div>

    </div>
}

export default Portfolio;