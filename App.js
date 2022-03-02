
import { Text, View } from 'react-native';
import Times from './Components/Times.js';

import styles from './styles.js'
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text ><Times /></Text>
        </View>
      </View>
    </>
  );
}