import { StatusBar } from "expo-status-bar";
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer}from'@react-navigation/native';
import {createStackNavigator}from'@react-navigation/stack';
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Confirmation from "./screens/Confirmation";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style ={{flex: 1}}>
      <NavigationContainer>
         <MainNavigator.Navigator screenOptions={{ headerShown: false }} >
          <MainNavigator.Screen name="Splash" component={Splash}/>
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Signup" component={Signup} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Cart" component={Cart} />
          <MainNavigator.Screen name="Checkout" component={Checkout} />
          <MainNavigator.Screen name="Confirmation" component={Confirmation} />
         </MainNavigator.Navigator>
      </NavigationContainer> 
      
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},
});

