import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';

interface AdvantageProps { }

const Advantage: React.FC<AdvantageProps> = () => {

    return (
        <div className={cls.wrapper}>
            <h1>Наши преимущества</h1>
            <div className={cls.advantages}>
                <div className={cls.section}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage1.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Индивидуальный подход
                            к клиенту</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage2.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Высокий уровень
                            производство</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage3.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Доступные цены</p>
                    </div>
                </div>
                <div className={cls.section}>
                    <div className={cls.item2}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage4.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Мы приципиально не работаем по
                            системы «откатов»</p>
                    </div>
                    <div className={cls.item2}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage5.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Профессиональная команда из квалифицированные
                            специалистов</p>
                    </div>
                </div>
                <div className={cls.section}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage6.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Отличное качества</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage6.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Удобная и быстрая
                            доставка</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage8.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>Гарантируем соблюдение
                            сроков</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Advantage;