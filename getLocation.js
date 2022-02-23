import * as Location from 'expo-location';


export default async function getLocation() {
    
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        //setLocation('Permission to access location was denied');
        
        return ;
    }
    return await Location.getCurrentPositionAsync({});
}