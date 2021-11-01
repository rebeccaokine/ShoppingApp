import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/21/03/08/210308d8947d0ffb1b51280dcf617d4c.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Dainty</Text>
      <Text style={{
        fontSize:20,
        color:'#E5CCFF',
        textAlign:'center',
        fontFamily:'papyrus',
        }}>by Rebecca</Text>
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

export default App;
