import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import SplashScreen from './components/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    

  }, []);

  return (
     <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.FadeFromBottomAndroid, 
        }}
      
      initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
 
});
