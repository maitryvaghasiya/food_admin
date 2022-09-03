import { View, Text } from 'react-native'
import React from 'react'
import Pannel from './app/container/Pannel'
import LogIn from './app/container/LogIn'
import SignUp from './app/container/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  
  return (
    // <View>
    //   {/* <Pannel /> */}
    //   <LogIn />
    //   {/* <SignUp /> */}
    // </View>



    <NavigationContainer>
    {/* <Stack.Navigator>
        <Stack.Screen name="log" component={LogIn} />
        <Stack.Screen name="home" component={Pannel} />
        <Stack.Screen name="signin" component={SignUp} />
      </Stack.Navigator> */}
      <Tab.Navigator  screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'home') {
                    iconName = focused
                    return <MaterialIcons name={'home'} size={30} color={color} />;    
                  } else if (route.name === 'login') {
                    iconName = focused 
                    return <Ionicons name={"restaurant"} size={22} color={color} />;
                  } 
      
                //   return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#32B768',
                tabBarInactiveTintColor:"#6B7280",

                headerShown: false,
              })}>
        <Tab.Screen name="home" component={Pannel} />
        <Tab.Screen name="login" component={LogIn} />
      </Tab.Navigator>
    </NavigationContainer>

    
  )
}