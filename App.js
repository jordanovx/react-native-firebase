// App.js

// Root component of the app,
// setting up routes


// Libs
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// Components
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen'

const Stack = createStackNavigator();

// function HomeScreen1() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen test 1</Text>
//     </View>
//   );
// }

const App = () => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      { user ? (
        <Stack.Screen name="Home">
          { props => <HomeScreen {...props} extraData={user} /> }
        </Stack.Screen>
      ) : (
        <>
        <Stack.Screen name="Login" component={ LoginScreen } />
        <Stack.Screen name="Registration" component={ RegistrationScreen } />
        </>
      )}
        <Stack.Screen name="Home" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;