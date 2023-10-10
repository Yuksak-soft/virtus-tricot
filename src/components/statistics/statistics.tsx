"use client";
import React from 'react';
import cls from "./style.module.scss"
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';

interface StatisticsProps { }


interface ItemsProps {
    count: number | string | any;
    text: string;
    degree?: string;
    line?: boolean
}

const Statistics: React.FC<StatisticsProps> = () => {

    const { t } = useTranslation()

    const items: ItemsProps[] = [
        {
            count: <CountUp duration={6} start={0} end={10} />,
            text: t("statisticTextOne")
        },
        {
            count: <CountUp duration={6} start={0} end={15} />,
            text: t("statisticTextTwo")
        },
        {
            count: <CountUp duration={6} start={0} end={1000} />,
            text: t("statisticTextThree")
        },
        {
            count: <CountUp duration={6} start={0} end={3000} />,
            text: t("statisticTextFour")
        },
        {
            count: <CountUp duration={6} start={0} end={5000} />,
            text: t("statisticTextFive"),
            degree: "м2"
        },
        {
            count: <CountUp start={0} end={10000} />,
            text: t("statisticTextSix")
        },
        {
            count: <CountUp start={0} end={600000} />,
            text: t("statisticTextSeven"),
            degree: "кг"
        },
    ];

    const topItems: ItemsProps[] = [
        {
            count: <CountUp duration={6} start={0} end={10} />,
            text: t("statisticTextOne"),
            line: true
        },
        {
            count: <CountUp duration={6} start={0} end={15} />,
            text: t("statisticTextTwo"),
            line: true
        },
        {
            count: <CountUp duration={6} start={0} end={1000} />,
            text: t("statisticTextThree"),
            line: true
        },
        {
            count: <CountUp duration={6} start={0} end={3000} />,
            text: t("statisticTextFour"),
            line: false
        },
    ];

    const bottomItems: ItemsProps[] = [
        {
            count: <CountUp duration={6} start={0} end={5000} />,
            text: t("statisticTextFive"),
            degree: "м2",
            line: true
        },
        {
            count: <CountUp duration={6} start={0} end={10000} />,
            text: t("statisticTextSix"),
            line: true
        },
        {
            count: <CountUp duration={6} start={0} end={600000} />,
            text: t("statisticTextSeven"),
            degree: "кг",
            line: false
        },
    ]

    return (
        <div className={cls.wrapper}>
            <div className={cls.items}>
                {
                    items.map(item => (
                        <div key={item.text} className={cls.item}>
                            <h1>{item.count} <span style={{ fontSize: 20 }}>{item.degree}</span></h1>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>

            <div className={cls.mediaItems}>
                <div className={cls.topItems}>
                    {topItems.map(item => (
                        <div key={item.text} className={cls.item} style={{ borderRight: item.line ? "1.5px solid #cecece" : "none" }}>
                            <h1>{item.count} <span style={{ fontSize: 20 }}>{item.degree}</span></h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={cls.bottomItems}>
                    {bottomItems.map(item => (
                        <div key={item.text} className={cls.item} style={{ borderRight: item.line ? "1.5px solid #cecece" : "none" }}>
                            <h1>{item.count} <span style={{ fontSize: 20 }}>{item.degree}</span></h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Statistics;