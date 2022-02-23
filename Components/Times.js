
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import getZip from '../getZip';
import styles from '../styles';
import Header from './Header.js';

export default function Times() {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(false);

    const today = new Date().toISOString().split('T')[0];


    useEffect(() => {
        (async () => {
            try {

                let gotZip = await getZip();

                /*** Get Data */
                let r = await fetch(`https://www.hebcal.com/zmanim?cfg=json&zip=10314&date=${today}`);
                if (gotZip.postalCodes) {
                    if (gotZip.postalCodes.length) {
                        r = await fetch(`https://www.hebcal.com/zmanim?cfg=json&zip=${gotZip.postalCodes[0].postalCode}&date=${today}`)

                    }
                }
                if (!r.ok) {
                    throw new Error(`ERR: ${r.status} ${r.statusText} `)
                }
                const data = await r.json();
                setData(data);
                setLoad(true);
                return async () => {
                    setData(data);
                    setLoad(true);
                }



            } catch (error) {
                console.log(error);
            }

        })();
    }, [load]);

    if (load) {
        const times = Object.keys(data.times).map(t => {
            const fullTime = new Date(data.times[t]).toLocaleTimeString();
            const time = fullTime.split(':');
            const convert = time[0] > 12 ? `${Number(time[0]) - 12 < 10 ? `0${time[0] - 12}` : `${time[0]}`}:${time[1]}:${time[2]} PM` : fullTime + ' AM'

            return <Text key={t} style={styles.times}>{t}--{convert}</Text>
        })

        return (<>
            <Header data={data} />
            <View>
                {times}
            </View>
        </>

        )
    }

    return (<>

        <View>
            <Text>{'searchin...'}</Text>
        </View>
    </>

    )

}