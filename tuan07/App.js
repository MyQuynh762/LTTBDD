import SC1 from './Screens/Sc1';
import SC2 from './Screens/Sc2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SC3 from './Screens/Sc3';


const Stack = createStackNavigator();


export default function App() {
    return ( 
     
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name="home " component={SC1}   options={{ headerShown: false }} />
         <Stack.Screen name="screen2" component={SC2}options={{ headerShown: false }}/>
         <Stack.Screen name="screen3" component={SC3}   options={{ headerShown: false }}/>
      
       </Stack.Navigator>
      </NavigationContainer>
    
     
    )};

