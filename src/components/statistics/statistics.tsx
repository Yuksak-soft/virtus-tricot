import React from 'react';
import cls from "./style.module.scss"

interface StatisticsProps { }


interface ItemsProps {
    count: number | string;
    text: string;
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
            count: "5000 м2",
            text: "место для производство"
        },
        {
            count: "10.000",
            text: "видоа аксессуаров"
        },
        {
            count: "600.000 кг",
            text: "выполненных заказов каждый год"
        },
    ]

    return (
        <div className={cls.wrapper}>
            {
                items.map(item => (
                    <div className={cls.item}>
                        <h1>{item.count}</h1>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics;