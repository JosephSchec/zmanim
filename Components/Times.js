
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import getZip from '../HelperFunctions/getZip';
import convertToHebrew from '../HelperFunctions/convertToHebrew'
import styles from '../styles';
import Header from './Header.js';
import Footer from './Footer.js'

export default function Times({ navigation }) {
    const [data, setData] = useState({});

    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        (async () => {
            try {

                let gotZip = await getZip();
                /*** Get Data */
                let r = await fetch(`https://www.hebcal.com/zmanim?cfg=json&zip=10314&date=${today}`);
                if (Array.isArray(gotZip.postalCodes)) {
                    r = await fetch(`https://www.hebcal.com/zmanim?cfg=json&zip=${gotZip.postalCodes[0].postalCode}&date=${today}`)
                }
                if (!r.ok) {
                    throw new Error(`ERR: ${r.status} ${r.statusText} `)
                }
                const data = await r.json();
                setData(data);
                return async () => {
                    setData(data);
                }
            } catch (error) {
                console.log(error);
            }

        })();
    }, [data]);

    if (data.times) {
        const releventTimes = ["alotHaShachar", "misheyakirMachmir", "sunrise", "sofZmanShma", "sofZmanTfilla"
            , "chatzot", "minchaGedola", "minchaKetana", "sunset"];
        const timesArr = Object.keys(data.times).filter(time => releventTimes.includes(time))
        const times = timesArr.map(t => {

            const fullTime = new Date(data.times[t]).toLocaleTimeString();
            const time = fullTime.split(':');

            /**                   AM OR PM                      TIME GETS ZERO IN FRONT OR NOT              */
            const convert = time[0] >= 12 ? `${Number(time[0]) - 12 < 10 && Number(time[0]) - 12 !== 0 ? `0${time[0] - 12}` : `${time[0]}`}:${time[1]}:${time[2]} PM` : fullTime + ' AM'


            t = convertToHebrew(t)

            return { convert, t }

        })

        const render = ({ item }) => {
            return (<View style={styles.timeBox}>

                <Text style={styles.times}>{item.convert}</Text>
                <Text style={styles.times}>---{item.t}</Text>
            </View>)
        }
        return (<>
            <View style={styles.container}>
                <Header data={data} />
                <SafeAreaView style={styles.timesContainer}>

                    <FlatList data={times} renderItem={render} keyExtractor={item => item.t} />
                </SafeAreaView>

                <Footer data={data} />
            </View>
        </>

        )
    }

    return (<>

        <View style={styles.container}>
            <Text style={styles.date}>{'Searching...'}</Text>
        </View>
    </>

    )

}