import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/25/ab/db/25abdbe3361d84950e69f6d865f7518a.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TouchableOpacity 
     style={{ 
       backgroundColor: "purple", 
       borderRadius:10, 
       padding:10,
       paddingHorizontal: 20,
       marginTop:10,
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Email</Text>

    </TouchableOpacity>

    <TouchableOpacity 
     style={{ 
       backgroundColor: "purple", 
       borderRadius:10, 
       padding:10,
       paddingHorizontal: 20,
       marginTop:10,
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Password</Text>
    </TouchableOpacity>

    <Text style={{
      alignItems:"center",
      color:"#4C0099",
      fontWeight:500,
      marginTop:10,
      }}>Forgot Password?</Text>

     <Text style={{
       alignItems:"center",
      color:"#4C0099",
      fontWeight:500,
      marginTop:10,
      }}>or</Text>

    <TouchableOpacity 
     style={{ 
       backgroundColor: "purple", 
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:20,color:"#E5CCFF",fontFamily: 'Cochin'}}>Continue with </Text>
    </TouchableOpacity>

    
   <Text style={{
      marginTop:15,
      fontWeight:500,
      color:"#4C0099",
    }}
    >Don't have an account? 
    <Text style={{color: "#B266FF"}}> Sign Up</Text>
    </Text>
    

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
});

export default App;