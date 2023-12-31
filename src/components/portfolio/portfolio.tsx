"use client";
import React, { useEffect, useRef } from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import anime from 'animejs';
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
    { image: "/41.jpg" },
    { image: "/42.jpg" },
    { image: "/43.jpg" },
    { image: "/44.jpg" },
    { image: "/45.jpg" },
    { image: "/51.JPG" },
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
    { image: "/21.jpg" },
    { image: "/40.jpg" },
    { image: "/46.jpg" },
    { image: "/47.jpg" },
    { image: "/48.jpg" },
    { image: "/49.jpg" },
    { image: "/50.jpg" },
]




const Portfolio: React.FC<PortfolioProps> = () => {

    const { t } = useTranslation()
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        const animateSection1 = () => {
            anime({
                targets: section1Ref.current,
                translateX: '350%',
                easing: 'linear',
                duration: 60000,
                // direction: 'alternate',
                loop: true,
            });
        };

        const animateSection2 = () => {
            anime({
                targets: section2Ref.current,
                translateX: '-350%',
                easing: 'linear',
                duration: 60000,
                // direction: 'alternate',
                loop: true,
            });
        };

        animateSection1();
        animateSection2();
    }, []);


    return <div className={cls.wrapper}>
        <div className={cls.title}>
            <h1>{t("portfolio")}</h1>
            <div className={cls.titleLine}></div>
        </div>
        <div className={cls.centerLine}></div>
        <div className={cls.products}>
            <div ref={section1Ref} className={cls.section1}>
                {topItems.map(item => (
                    <React.Fragment key={item.image}>
                        <Image src={item.image} alt='item' width={200} height={250} />
                        <div className={cls.line}></div>
                    </React.Fragment>
                ))}
            </div>
            <div ref={section2Ref} className={cls.section2}>
                {bottomItems.map(item => (
                    <React.Fragment key={item.image}>
                        <Image src={item.image} alt='item' width={200} height={250} />
                        <div className={cls.line}></div>
                    </React.Fragment>
                ))}
            </div>
        </div>

    </div>
}

export default Portfolio;