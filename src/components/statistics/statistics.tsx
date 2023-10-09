"use client";
import React from 'react';
import cls from "./style.module.scss"
import { useTranslation } from 'react-i18next';

interface StatisticsProps { }


interface ItemsProps {
    count: number | string;
    text: string;
    degree?: string;
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
    ]

    return (
        <div className={cls.wrapper}>
            {
                items.map(item => (
                    <div key={item.text} className={cls.item}>
                        <h1>{item.count} <span style={{ fontSize: 20 }}>{item.degree}</span></h1>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics;