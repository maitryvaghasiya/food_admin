

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNav } from './app/container/BottomNav';
import { StackNav } from './app/container/StackNav';
import AddScreen from './app/container/AddScreen';
import Pannel from './app/container/Pannel';
import LogIn from './app/container/LogIn';
import SignUp from './app/container/SignUp';



export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const stackN = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="AddS" component={AddScreen} />
            
      </Stack.Navigator> 
      </NavigationContainer>
    )
  }

  const tabN = () =>{
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator         
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'home') {
                    iconName = focused
                    return <MaterialIcons name={'home'} size={30} color={color} />;    
                  } else if (route.name === 'login') {
                    iconName = focused 
                    return <Ionicons name={"restaurant"} size={22} color={color} />;
                  }
                },
                tabBarActiveTintColor: '#32B768',
                tabBarInactiveTintColor:"#6B7280",

                headerShown: false,
              })}

        >
            <Tab.Screen name="home" component={Pannel} />
            <Tab.Screen name="AddS" component={AddScreen} />

        </Tab.Navigator>

      </NavigationContainer>
    )

  }

  return (
   
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="log" component={LogIn} />
            <Stack.Screen name="signin" component={SignUp} />
            <Stack.Screen name="home1" component={tabN} />
      </Stack.Navigator> 
    </NavigationContainer>
 
  )
}