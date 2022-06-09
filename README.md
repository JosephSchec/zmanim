## zmanim
### After combining 4 APIS I created my first APK with React-Native / using Expo-Cli :
#### The 4 API's used:
* expo loaction => used to get the users [lon , lat]
* geonames => used to get postal code nearest to users location 
* hebcal zmanim and hebrew date apis => each based off the recived location
* Sefaria for tefilla
* react-native-render-html => used to get the native html from seferia 
* .replace(/[\u0591-\u05AF]/gm, ''); removed trup from letters

