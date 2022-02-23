import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'


export default function Header(props) {
    const { data } = props;
    return (
        <>
            <View>
                <Text style={styles.head}> On {data.date}</Text>
                <Text style={styles.head} >Zmanim for: {data.location.name} : </Text>
            </View>
        </>
    )
}