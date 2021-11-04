import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign,Feather } from '@expo/vector-icons';

export default function Home() {
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
          <TouchableOpacity>
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


      <Text style={{ fontWeight: 'boldest', marginTop: 20,marginBottom: 20,color:'purple' }}>Categories</Text>



      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: 'black',
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 12,
          }}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'black', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>Tops</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'black', padding: 10, borderRadius: 12 }}>
          <TouchableOpacity>
            <Text style={{ color: 'purple' }}>Pants</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ backgroundColor: 'black', padding: 10, borderRadius: 12,opacity:0.7}}>
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
              backgroundColor: 'black',
              width: 150,
              height: 230,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/1e/69/9d/1e699de2bca423ed14ae4e9603edef4d.jpg"}}
            />

            <TouchableOpacity>
            <Feather style={{textAlign:'right'}}
            name="shopping-bag"
             size={20} 
             color="purple" />
            </TouchableOpacity>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>

          </View>
          
          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 150,
              height: 230,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/1e/69/9d/1e699de2bca423ed14ae4e9603edef4d.jpg"}}
            />
            <TouchableOpacity>
            <Feather style={{textAlign:'right'}}
            name="shopping-bag"
             size={20} 
             color="purple" />
            </TouchableOpacity>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>

           <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 150,
              height: 230,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/1e/69/9d/1e699de2bca423ed14ae4e9603edef4d.jpg"}}
            />
            <TouchableOpacity>
            <Feather style={{textAlign:'right'}}
            name="shopping-bag"
             size={20} 
             color="purple" />
            </TouchableOpacity>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 150,
              height: 230,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/1e/69/9d/1e699de2bca423ed14ae4e9603edef4d.jpg"}}
            />
            <TouchableOpacity>
            <Feather style={{textAlign:'right'}}
            name="shopping-bag"
             size={20} 
             color="purple" />
            </TouchableOpacity>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#f4f2f2',
              width: 150,
              height: 230,
              borderRadius: 15,
              padding: 15,
              margin: 10,
            }}>
            <Image
              style={{ height: 150, width: 110, alignSelf: 'center',borderRadius: 15, }}
              source={{uri: "https://i.pinimg.com/236x/1e/69/9d/1e699de2bca423ed14ae4e9603edef4d.jpg"}}
            />

            <TouchableOpacity>
            <Feather style={{textAlign:'right'}}
            name="shopping-bag"
             size={20} 
             color="purple" />
            </TouchableOpacity>

            <Text style={{ color: '#828080', textAlign: 'center' }}>
              Pinarello Bike
            </Text>
            <Text style={{ fontWeight: 'bolder', textAlign: 'center' }}>
              <Text style={{ color: 'orange', textAlign: 'center' }}>$</Text>{' '}
              1,700.00
            </Text>
          </View>



          
        </View>
      </View>
    </ScrollView>
  );
}