import React from 'react';
import cls from "./style.module.scss"
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {


    return <div className={cls.wrapper}>
        <Image src="/footer-logo.svg" alt='logo' width={140} height={62} />
        <a className={cls.phoneNumber} href="tel: +998715007888">(71) 500-78-88</a>
        <p>
            <Image src="/footer-location.svg" alt='location' width={20} height={20} />
            Usa, San Fransisco, St22
        </p>

        <div className={cls.footerBottom}>
            <div className={cls.left}>
                <p>© 2023: Barcha huquqlar himoylangan</p>
            </div>
            <div className={cls.right}>
                <div className={cls.socialIcons}>
                    <Link href="#">
                        <Image src="/facebook-footer.svg" alt='facebook' width={25} height={25} />
                    </Link>
                    <Link href="#">
                        <Image src="/youtube-footer.svg" alt='youtube' width={25} height={25} />
                    </Link>
                    <Link href="#">
                        <Image src="/instagram-footer.svg" alt='instagram' width={25} height={25} />
                    </Link>
                </div>
            </div>
        </div>
    </div>

}

export default Footer;