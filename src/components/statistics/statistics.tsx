"use client";
import React from 'react';
import cls from "./style.module.scss"
import { useTranslation } from 'react-i18next';

interface StatisticsProps { }


interface ItemsProps {
    count: number | string;
    text: string;
    degree?: string;
    line?: boolean
}

const Statistics: React.FC<StatisticsProps> = () => {

    const { t } = useTranslation()

    const items: ItemsProps[] = [
        {
            count: 10,
            text: t("statisticTextOne")
        },
        {
            count: 15,
            text: t("statisticTextTwo")
        },
        {
            count: 1000,
            text: t("statisticTextThree")
        },
        {
            count: 3000,
            text: t("statisticTextFour")
        },
        {
            count: "5000",
            text: t("statisticTextFive"),
            degree: "м2"
        },
        {
            count: "10.000",
            text: t("statisticTextSix")
        },
        {
            count: "600.000",
            text: t("statisticTextSeven"),
            degree: "кг"
        },
    ];

    const topItems: ItemsProps[] = [
        {
            count: 10,
            text: t("statisticTextOne"),
            line: true
        },
        {
            count: 15,
            text: t("statisticTextTwo"),
            line: true
        },
        {
            count: 1000,
            text: t("statisticTextThree"),
            line: true
        },
        {
            count: 3000,
            text: t("statisticTextFour"),
            line: false
        },
    ];

    const bottomItems: ItemsProps[] = [
        {
            count: "5000",
            text: t("statisticTextFive"),
            degree: "м2",
            line: true
        },
        {
            count: "10.000",
            text: t("statisticTextSix"),
            line: true
        },
        {
            count: "600.000",
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