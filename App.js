import { StyleSheet,Text,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import AboutCdac from './src/screens/AboutCdac';
import AboutCDelhi from './src/screens/AboutCDelhi';
import India from './src/screens/India';
import Delhi from './src/screens/Delhi';
import Facility from './src/screens/Facility';
import Elibrary from './src/screens/Elibrary';
import Rules from './src/screens/Rules';
import Others from './src/screens/Others';



const App = () => {

  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(false)
    }, 3000);
  }, [])

  

  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splashScreen'>
      
       {
          show ? <Stack.Screen name="splashScreen" component={splashScreen} options={{ headerShown: false }} /> : null
        } 

       
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AboutCdac" component={AboutCdac} />
        <Stack.Screen name="AboutCDelhi" component={AboutCDelhi} />
        <Stack.Screen name="India" component={India} />
        <Stack.Screen name="Delhi" component={Delhi} />
        <Stack.Screen name="Facility" component={Facility} />
        <Stack.Screen name="Elibrary" component={Elibrary} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="Others" component={Others} />
      
        

      </Stack.Navigator>
    </NavigationContainer>
  

    
  )

}
 

export default App

const styles = StyleSheet.create({})