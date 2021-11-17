import React from "react";
import {View,Text,Image,TouchableOpacity,ImageBackground,} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Login({navigation}){
 return(
   <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#FFE5CC"}}>
    
    <Text style={{ color:"#cc6600", fontSize: 25, fontWeight: 700}}> Confirmation Success 🎉</Text>
    <Text style={{color:'#cc6600',fontWeight:500}}>Your package will be delievered in 2 days</Text>
    <TouchableOpacity 
       onPress={() => {
        navigation.navigate("Home")
      }}
     style={{ 
       backgroundColor: "#FF9933", 
       borderRadius:10, 
       padding: 10,
       paddingHorizontal: 50,
       marginTop:10,
       flexDirection:"row",
       }}>

    <FontAwesome name ="home" size={24} color="#cc6600"/>
     <Text style={{fontSize:16,color:"#cc6600", marginLeft:15}}>Back to Home</Text>

    </TouchableOpacity>

    

   </View>
  
 );
}
