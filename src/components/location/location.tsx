"use client";
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import cls from "./style.module.scss"

interface LocationProps { }

const Location: React.FC<LocationProps> = () => {

    const defaultState = {
        center: [41.2555236, 69.2418187],
        zoom: 12,
    };

    return <div className={cls.wrapper}>
        <YMaps>
            <Map style={{ width: "101vw", height: "400px" }} defaultState={defaultState}>
                <Placemark geometry={[41.2555236, 69.2418187]} />
            </Map>
        </YMaps>
    </div>


}

export default Location;