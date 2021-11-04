import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://i.pinimg.com/564x/2f/ad/28/2fad28ac214b54a0420dbbf103657039.jpg' };

const Signup = ({navigation}) => (
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
       opacity:0.5,
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
       opacity:0.5,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Password</Text>
    </TouchableOpacity>
    
    
    <TouchableOpacity 
    onPress={()=>navigation.navigate('Home')}
     style={{ 
       justifyContent: 'center',
       backgroundColor: "#773091", 
       borderRadius:10, 
       padding:5,
       paddingHorizontal: 20,
       marginTop:20,
       opacity:0.5,
       flexDirection:"row",
       }}>

     <Text style={{fontSize:16,color:"#E5CCFF"}}>Create Account</Text>
    </TouchableOpacity>

     <Text style={{
       alignItems:"center",
      color:"#4C0099",
      fontWeight:500,
      marginTop:20,
      textAlign:'center',
      }}>or</Text>


     <Text style={{fontSize:18,
     color:"#E5CCFF",
     fontFamily: 'Cochin',
     textAlign:"center",
     marginTop:20,
     }}>Continue with </Text>


 <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="apple1" size={24} color="#B266FF"/>
    </TouchableOpacity>
  
  <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="google" size={24} color="#B266FF"/>
    </TouchableOpacity>

  <TouchableOpacity 
     style={{ 
       justifyContent: 'center',
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 20,
       marginTop:10,
       flexDirection:"row",
       backgroundColor:"black",
       opacity:0.7,
       }}>
  <AntDesign name ="facebook-square" size={24} color="#B266FF"/>
    </TouchableOpacity>
  
   
   <Text style={{
      marginTop:15,
      fontWeight:500,
      color:"#4C0099",
      textAlign:'center',
    }}
    >Already have an account? 
    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
    <Text style={{color: "#B266FF",textAlign:'center'}}> Login</Text>
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

export default Signup;
