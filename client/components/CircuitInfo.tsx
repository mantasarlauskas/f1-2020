import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Circuit } from 'client/reducers/race';
import styles from 'client/components/CircuitInfo.less';
import InfoRow from 'client/components/InfoRow';

function CircuitInfo({ circuit, raceName, date }: CircuitInfoProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const { Location: { lat, long, country, locality }, circuitName } = circuit;

    useEffect(() => {
        new mapboxgl.Map({
            accessToken: process.env.MAP_TOKEN,
            container: mapRef.current as HTMLDivElement,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [parseFloat(long), parseFloat(lat)],
            zoom: 13,
        });
    }, [lat, long]);

    return (
        <div className={styles.root}>
            <div className={styles.info}>
                <InfoRow label="Race name" value={raceName} />
                <InfoRow label="Date" value={date} />
                <InfoRow label="Circuit name" value={circuitName} />
                <InfoRow label="Country" value={country} />
                <InfoRow label="Locality" value={locality} />
            </div>
            <div className={styles.map} ref={mapRef} />
        </div>
    );
}

interface CircuitInfoProps {
    circuit: Circuit;
    raceName: string;
    date: string;
}

export default CircuitInfo;
