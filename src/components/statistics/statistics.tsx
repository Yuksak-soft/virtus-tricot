import React from 'react';
import cls from "./style.module.scss"

interface StatisticsProps { }


interface ItemsProps {
    count: number | string;
    text: string;
    degree?: string;
}

const Statistics: React.FC<StatisticsProps> = () => {

    const items: ItemsProps[] = [
        {
            count: 10,
            text: "иностранные квалифицированнные специалистов"
        },
        {
            count: 15,
            text: "лет опыта  изготовлении текстилного аксессуары"
        },
        {
            count: 1000,
            text: "клиенты экспортёр клиентов"
        },
        {
            count: 3000,
            text: "довольных клиентов"
        },
        {
            count: "5000",
            text: "место для производство",
            degree: "м2"
        },
        {
            count: "10.000",
            text: "видоа аксессуаров"
        },
        {
            count: "600.000",
            text: "выполненных заказов каждый год",
            degree: "кг"
        },
    ]

    return (
        <div className={cls.wrapper}>
            {
                items.map(item => (
                    <div className={cls.item}>
                        <h1>{item.count} <sub style={{ fontSize: 25 }}>{item.degree}</sub></h1>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics;