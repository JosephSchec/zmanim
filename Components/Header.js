import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../styles';



export default function Header(props) {
    const { data } = props;
    const [hebDate, setHebdate] = useState('');
    const [omer, setOmer] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const today = data.date.split('-')
                const r = await fetch(`https://www.hebcal.com/converter?cfg=json&gy=${today[0]}&gm=${today[1]}&gd=${today[2]}&g2h=1`);
                if (!r.ok) {
                    throw new Error('no date found');
                }
                const heb = await r.json();
                setHebdate(heb.hebrew)
                if (heb.events.length ) {
                    console.log(heb.events[heb.events.length - 1])
                    setOmer(heb.events[heb.events.length - 1])
                }
            } catch (e) { console.log(e) }
        })();
    }, []);

    return (
        <>
            <Text style={styles.date}>  {data.date} / {hebDate}</Text>
            <Text style={styles.date}> {omer}</Text>

            <Text style={styles.head} >Zmanim For: {data.location.name} : </Text>
        </>
    )
}
