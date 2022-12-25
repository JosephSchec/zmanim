import { ScrollView, Text } from 'react-native'
import React, { useMemo } from 'react'
import styles from '../styles'
import getDavening from '../HelperFunctions/getDavening';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
export default function Davening(props) {
  const tefillas = getDavening(props);
  const { width } = useWindowDimensions();

  const daven = useMemo(
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
  let tef = tefillas.map((t, i) => {
    let text = t.replace(/[\u0591-\u05AF]/gm, '')
    return (!text.includes(['</small>']) && <RenderHTML tagsStyles={daven} key={i} contentWidth={width} source={{ html: text }} />)
  });


  return (
    <ScrollView style={styles.scrollView} >
      {tef}
    </ScrollView>
  )

}