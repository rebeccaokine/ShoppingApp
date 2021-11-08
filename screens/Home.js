import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign,Feather } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <ScrollView
      style={{
        backgroundColor: '#FFC7FC',
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
        <Ionicons name="ios-menu-outline" size={24} color="purple" />
        </TouchableOpacity>

        <TouchableOpacity>
        <AntDesign name="search1" size={20} color="purple" />
        </TouchableOpacity>
        
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity 
          onPress={()=>{navigation.navigate("Cart")}}>
          <Feather name="shopping-bag" size={20} color="purple" />
          </TouchableOpacity>

          <TouchableOpacity>
          <Ionicons
            style={{ marginLeft: 15 }}
            name="notifications-outline"
            size={20}
            color="purple"
          />
          </TouchableOpacity>
        </View>
      </View>


      <Text style=
      {{ fontWeight: '700',
       marginTop: 20,
       marginBottom: 20,
       color:'purple',
       fontSize: 20
      }}>Categories</Text>



      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity>
            <Text style={{
               color: 'purple'
             }}>
             All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>Tops</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>Pants</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'white', padding: 10, borderRadius: 12,}}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>Dresses</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'column', marginVertical: 10 }}>


         
          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/564x/9c/22/94/9c2294022beb041909d735fb60a8968e.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Orange camo dress
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              67
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/10/19/92/101992c5c8bea70288c7e17b1f78b96a.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
          
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Something
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              77
            </Text>
          </View>
         

           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/03/66/92/0366926b487efd293674c78e67cc951a.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
          
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Something
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              100
            </Text>
          </View>
          
           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/8e/27/10/8e27108ce759ac221e0de1e6bebcd1aa.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Something
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              42
            </Text>

          </View>
          

          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/d4/0f/60/d40f608c640f2d1252406adb4f63be0d.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Orange camo dress
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              69
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/736x/12/20/fc/1220fce979ad0d3f963852fec99f06c8.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
          
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Something
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              77
            </Text>
          </View>
          </View>

           <View>
          <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/7d/2c/da/7d2cdae8e0da7ee46e4c57e7e5fbe3da.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Orange camo dress
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              69
            </Text>
          </View>

           
           <View
            style={{
              backgroundColor: 'white',
              width: 150,
              height: 280,
              borderRadius: 15,
              padding: 15,
              margin: 10,
              
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/12/6e/2f/126e2f2df3071c04d2c227d08e98752e.jpg"}}
            />
            <View
              style={{
                marginTop: 15,
                backgroundColor: '#FACCFF',
                alignSelf: 'center',
                borderRadius: 10,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'purple',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    
          
                  }}>
                  Add to Cart
                  <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="purple" 
                 />
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Something
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              77
            </Text>
          </View>
        


          

          

          
      
          
        </View>
      </View>
    </ScrollView>
  );
}