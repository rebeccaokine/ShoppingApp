import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer}from'@react-navigation/native'
import {createStackNavigator}from'@react-navigation/stack'
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const MainNavigator= createStackNavigator();

  return (
    <View style ={{flex: 1}}>
      <NavigationContainer>
         <MainNavigator.Navigator initialRouteName="Login" >
         <MainNavigator.Screen name="Splash" component={Splash}/>
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Login" component={Login} />
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

