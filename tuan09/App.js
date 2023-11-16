import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sc1 from './Screens/Sc1';
import Sc2 from './Screens/Sc2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Sc1" component={Sc1} options={{headerShown:false}}/>
        <Stack.Screen name="Sc2" component={Sc2} options={{headerShown:false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  
  );
};

export default App;
