"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

interface PortfolioProps { }

interface ItemProps {
    image: string;
}

const topItems: ItemProps[] = [
    { image: "/1.jpg" },
    { image: "/2.jpg" },
    { image: "/3.jpg" },
    { image: "/4.jpg" },
    { image: "/5.jpg" },
    { image: "/6.jpg" },
    { image: "/7.jpg" },
    { image: "/8.jpg" },
    { image: "/9.jpg" },
    { image: "/10.jpg" },
    { image: "/11.jpg" },
    { image: "/12.jpg" },
    { image: "/13.jpg" },
    { image: "/14.jpg" },
    { image: "/15.jpg" },
    { image: "/16.jpg" },
    { image: "/17.jpg" },
    { image: "/18.jpg" },
    { image: "/19.jpg" },
    { image: "/20.jpg" },
];

const bottomItems: ItemProps[] = [
    { image: "/21.jpg" },
    { image: "/22.jpg" },
    { image: "/23.jpg" },
    { image: "/24.jpg" },
    { image: "/25.jpg" },
    { image: "/26.jpg" },
    { image: "/27.jpg" },
    { image: "/28.jpg" },
    { image: "/29.jpg" },
    { image: "/30.jpg" },
    { image: "/31.jpg" },
    { image: "/32.jpg" },
    { image: "/33.jpg" },
    { image: "/34.jpg" },
    { image: "/35.jpg" },
    { image: "/36.jpg" },
    { image: "/37.jpg" },
    { image: "/38.jpg" },
    { image: "/39.jpg" },
]

const Portfolio: React.FC<PortfolioProps> = () => {

    const { t } = useTranslation()

    const propsSection1 = useSpring({
        loop: true,
        config: { duration: 25000 },
        to: async (next) => {
            while (true) {
                await next({ transform: 'translateX(-150%)' });
                await next({ transform: 'translateX(150%)' });
            }
        },
    });

    const propsSection2 = useSpring({
        loop: true,
        config: { duration: 25000 },
        to: async (next) => {
            while (true) {
                await next({ transform: 'translateX(150%)' });
                await next({ transform: 'translateX(-150%)' });
            }
        },
    });


    return <div className={cls.wrapper}>
        <h1>{t("portfolio")}</h1>
        <div className={cls.centerLine}></div>
        <div className={cls.products}>
            <animated.div style={propsSection2} className={cls.section1}>
                {topItems.map(item => (
                    <React.Fragment key={item.image}>
                        <Image src={item.image} alt='item' width={400} height={200} />
                        <div className={cls.line}></div>
                    </React.Fragment>
                ))}
            </animated.div>
            <animated.div style={propsSection1} className={cls.section2}>
                {bottomItems.map(item => (
                    <React.Fragment key={item.image}>
                        <Image src={item.image} alt='item' width={400} height={200} />
                        <div className={cls.line}></div>
                    </React.Fragment>
                ))}
            </animated.div>
        </div>

    </div>
}

export default Portfolio;