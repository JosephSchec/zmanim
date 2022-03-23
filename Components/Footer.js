import { Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import getTeffila from '../HelperFunctions/getTefilla';

export default function Footer(props) {
    const { data } = props;
    const tefillaTime = getTeffila(data.times);
    const navigation = useNavigation();
    
    return (
        <Button title={'Davening'} onPress={() => navigation.navigate('Davening', { data: data, name: tefillaTime.name })} />
    )
}