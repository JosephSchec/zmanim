
import Times from './Components/Times.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Davening from './Components/Davening.js';
import Benching from './Components/Benching.js';
export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Times} options={{ headerShown: false }} />
          <Stack.Screen name="Davening" component={Davening}  options={({ route }) => ({ title: route.params.name })}/>
          <Stack.Screen name="Benching" component={Benching}  options={({ route }) => ({ title: route.params.name })}/>

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}