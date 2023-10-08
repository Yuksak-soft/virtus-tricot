"use client";
import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import { Select } from 'antd';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };



    return (
        <div className={cls.wrapper}>
            <div className={cls.left}>
                <Image src="/logo.svg" alt='logo' width={118} height={50} />
                <div className={cls.icons}>
                    <Image src="/facebook.svg" alt='instagram' width={24} height={24} />
                    <Image src="/youtube.svg" alt='instagram' width={24} height={24} />
                    <Image src="/instagram.svg" alt='instagram' width={24} height={24} />
                </div>
            </div>
            <div className={cls.right}>
                <div className={cls.location}>
                    <Image src="/location.svg" alt='location' width={20} height={20} />
                    <p>Usa, San Fransisco, St22</p>
                </div>
                <Select
                    defaultValue="uz"
                    style={{ width: 70 }}
                    onChange={handleChange}
                    options={[
                        { value: 'uz', label: 'uz' },
                        { value: 'ru', label: 'ru' },
                    ]}
                />
                <button className={cls.navbarBtn}>
                    <Image src="/phone.svg" alt='phone' width={18} height={18} />
                    (71) 500-78-88
                </button>
            </div>
        </div>
    )


}

export default Navbar;