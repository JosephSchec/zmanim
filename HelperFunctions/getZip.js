
import getLocation from './getLocation'
export default async function getZip() {

    let gotLocation = await getLocation();

    if (gotLocation) {
        let gotZip = await fetch(`http://api.geonames.org/findNearbyPostalCodesJSON?lat=${gotLocation.coords.latitude}&lng=${gotLocation.coords.longitude}&username=shecky`)
        if (!gotZip.ok) {
            throw new Error("not available");
        }
        const response = await gotZip.json();
        if (response) {
            return response;
        }
        return '10314'
    }
}