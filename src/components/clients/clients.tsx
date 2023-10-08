import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';

interface ClientsProps { }

const Clients: React.FC<ClientsProps> = () => {

    return <div className={cls.wrapper}>
        <div className={cls.title}>
            <h1>Наши клиенты которые доверябт нам</h1>
            <div className={cls.line}></div>
            <p>Для нас главный показатель качества работы является доверие клиентов.
                Мы ценим своих клиентов и гордимся темб что они выбрали именно нашу компания для
                длительного сотрудничестваю Доверительные отношения с нашими партнёрами позволяют
                нам решать самые сложные задача в сжатые сроки. В первую очередь, наши клиенты - это
                наши пратнёры и друзья, мы ценим каждого нашего партнёра, и стараемся ежедневно
                улучшать наш сервис услуг!</p>
        </div>
        <div className={cls.brands}>
            <div className={cls.sectionTop}>
                <div className={cls.brandWrap}>
                    <Image src="/brand1.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand2.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand3.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand4.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand5.svg" alt="brand" fill />
                </div>
            </div>
            <div className={cls.section}>
                <div className={cls.brandWrap}>
                    <Image src="/brand6.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand7.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand8.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand9.svg" alt="brand" fill />
                </div>
                <div className={cls.line}></div>
                <div className={cls.brandWrap}>
                    <Image src="/brand10.svg" alt="brand" fill />
                </div>
            </div>
        </div>
    </div>

}

export default Clients;