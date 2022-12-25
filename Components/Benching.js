import { ScrollView, Text } from 'react-native'
import React, { useMemo } from 'react'
import styles from '../styles'
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Benching() {
    const { width } = useWindowDimensions();
    const [benchingState, setBenchingState] = useState([])





    useEffect(() => {
        (async () => {
            const response = await fetch("https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Berachot,_Birkat_HaMazon")
            if (!response.ok) {
                throw new Error('Can\'t load benching right now')
            } else {
                const r=await response.json()
                setBenchingState(r.he)
            }
        })()
    }, [])
    const benching = useMemo(
        () => ({
            body: {
                fontSize: 18,
                fontWeight: '300',
                color: '#ECDBBA',
                marginBottom: 10,
                padding: 5
            },
            small: {
                height: 0, width: 0, opacity: 0, display: 'none'
            }
        }), [])
    let bench = benchingState.map((b, i) => {
        let text = b.replace(/[\u0591-\u05AF]/gm, '')
        return (!text.includes(['</small>'])&&<RenderHTML tagsStyles={benching} key={i} contentWidth={width} source={{ html: text }} />)
    });
    return (
        <ScrollView style={styles.scrollView} >
            {bench}
        </ScrollView>
    )


}