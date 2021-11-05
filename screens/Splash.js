import React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://i.pinimg.com/564x/21/03/08/210308d8947d0ffb1b51280dcf617d4c.jpg' };

const SplashScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>

    <TouchableOpacity 
    onPress={()=>{navigation.navigate("Login")}}
       style={{
          textAlign:'center',
          flexDirection:"row",
          backgroundColor:'black',
          justifyContent:'center',
          opacity:0.5
       }}>
        <Text style={{color:"#E5CCFF",marginRight:10,textAlign:'center',fontSize:18}}>Get Started</Text>
        <AntDesign name ="forward" size={24} color="#B266FF"/>
        </TouchableOpacity>

      <Text style={styles.text}>Dainty</Text>
      <Text style={{
        fontSize:20,
        color:'#E5CCFF',
        textAlign:'center',
        fontFamily:'papyrus',
        marginLeft:20,
        marginRight:10
        }}>by Rebecca
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
  text: {
    marginTop:500,
    color: '#E5CCFF',
    fontFamily: 'Brush Script MT',
    fontSize: 50,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default SplashScreen;
