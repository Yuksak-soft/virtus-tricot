import React from 'react';
import cls from "./style.module.scss"
import Form from '../form/form';

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {

    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <h1>Производство и продажа качественные текстильного аксессуары в Ташкенты</h1>
            </div>
            <div className={cls.right}>
                <Form />
            </div>
        </div>
    )

}

export default Banner;