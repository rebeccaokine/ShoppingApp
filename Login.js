import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/25/ab/db/25abdbe3361d84950e69f6d865f7518a.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TouchableOpacity 
     style={{ 
       justifyContent: 'center', 
       backgroundColor: "#773091", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Email</Text>

    </TouchableOpacity>

    <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       backgroundColor: "#773091", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Password</Text>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <Text style={{
      alignItems:"center",
      color:"#4C0099",
      fontWeight:500,
      marginTop:10,
      textAlign:'center'        
      }}>Forgot Password?</Text>
    </TouchableOpacity>

     <Text style={{
       alignItems:"center",
      color:"#4C0099",
      fontWeight:500,
      marginTop:20,
      textAlign:'center',
      }}>or</Text>

    <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:18,
     color:"#E5CCFF",
     fontFamily: 'Cochin',
     }}>Continue with </Text>
    </TouchableOpacity>

   
   <Text style={{
      marginTop:15,
      fontWeight:500,
      color:"#4C0099",
      textAlign:'center',
    }}
    >Don't have an account? 
    <TouchableOpacity>
    <Text style={{color: "#B266FF",textAlign:'center'}}> Sign Up</Text>
    </TouchableOpacity>
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
