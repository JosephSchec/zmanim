import { ScrollView, Text } from 'react-native'
import React from 'react'
import styles from '../styles'
import getDavening from '../HelperFunctions/getDavening';

export default function Davening(props) {
  const tefillas = getDavening(props);

  let tef = tefillas.map((t, i) => {
    return <Text key={i} style={styles.daven}>{t.replace(/[a-z]|<|\/|>|-|"|=/gm, '')}</Text>
  });
  

  return (
    <ScrollView style={styles.scrollView} >
      {tef}
    </ScrollView>
  )

}