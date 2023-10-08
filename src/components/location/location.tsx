"use client";
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import cls from "./style.module.scss"

interface LocationProps { }

const Location: React.FC<LocationProps> = () => {

    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 10,
    };

    return <div className={cls.wrapper}>
        <YMaps>
            <Map style={{ width: "100vw", height: "400px" }} defaultState={defaultState}>
                <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
        </YMaps>
    </div>


}

export default Location;