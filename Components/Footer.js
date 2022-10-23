import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import getTeffila from '../HelperFunctions/getTefilla';
import styles from '../styles';


export default function Footer(props) {
    const { data } = props;
    const tefillaTime = getTeffila(data.times);
    const navigation = useNavigation();

    return (
        <View style={{ position: "absolute", bottom: 0 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Davening', { data: data, name: tefillaTime.name })} >
                <Text style={styles.footer}>Davening</Text>
            </TouchableOpacity>
        </View>
    )
}