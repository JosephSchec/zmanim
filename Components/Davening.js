import { ScrollView, Text } from 'react-native'
import React from 'react'
import styles from '../styles'
import getDavening from '../HelperFunctions/getDavening';

export default function Davening(props) {
 const tefillas=getDavening(props);

  setTimeout(() => tefillas.reverse(), 1000);

  let tef = tefillas.map((t, i) => <Text key={i} style={styles.daven}>{t.replace(/[<b><\/b><small><\/small>ig]/gm, '')}</Text>);

  return (
    <ScrollView style={styles.scrollView} >
      {tef}
    </ScrollView>
  )

}