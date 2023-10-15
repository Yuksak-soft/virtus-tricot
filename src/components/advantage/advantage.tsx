"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface AdvantageProps { }

const Advantage: React.FC<AdvantageProps> = () => {

    const { t } = useTranslation()

    return (
        <div className={cls.wrapper}>
            <div className={cls.title}>
                <h1>{t("advantages")}</h1>
                <div className={cls.titleLine}></div>
            </div>
            <div className={cls.advantages}>
                <div className={cls.section}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage1.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage1")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage2.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage2")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage3.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage3")}</p>
                    </div>
                </div>
                <div className={cls.section}>
                    <div className={cls.item2}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage4.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage4")}</p>
                    </div>
                    <div className={cls.item2}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage5.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage5")}</p>
                    </div>
                </div>
                <div className={cls.section}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage6.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage6")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage7.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage7")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage8.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage8")}</p>
                    </div>
                </div>
            </div>

            <div className={cls.mediaAdvantages}>
                <div className={cls.double}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage1.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage1")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage2.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage2")}</p>
                    </div>
                </div>
                <div className={cls.along}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage4.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage4")}</p>
                    </div>
                </div>
                <div className={cls.double}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage3.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage3")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage6.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage6")}</p>
                    </div>
                </div>
                <div className={cls.along}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage5.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage5")}</p>
                    </div>
                </div>
                <div className={cls.double}>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage7.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage7")}</p>
                    </div>
                    <div className={cls.item}>
                        <div className={cls.imgWrap}>
                            <Image src="/advantage8.svg" alt='advantage' width={39} height={39} />
                        </div>
                        <p>{t("advantage8")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantage;