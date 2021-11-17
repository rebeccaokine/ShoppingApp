import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
 
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign,Feather } from '@expo/vector-icons';

export default function CartList(params) {
  const navigation = params.navigation;
  return (

    <View style={{ backgroundColor: '#FFE5CC', paddingHorizontal: 20 }}>
      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PopularProducts');
          }}>
          <Ionicons name="arrow-back" size={20} style={{ marginLeft: 15 }} />
        </TouchableOpacity>


        <Text style={{ marginLeft: 80, fontWeight: 'bolder',color:'#cc6600' }}>Cart list</Text>
      </View>



      <View>
        <Text style={{ marginLeft: 117,color:'#cc6600' }}>(3 items)</Text>
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'white',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={{uri: "https://i.pinimg.com/564x/9c/22/94/9c2294022beb041909d735fb60a8968e.jpg"}}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#cc6600',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Camo Dress
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              67.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'white',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={{uri: "https://i.pinimg.com/236x/10/19/92/101992c5c8bea70288c7e17b1f78b96a.jpg"}}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#cc6600',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>Nike Hoodie
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              77.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>


     <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          borderRadius: 10,
          padding: 2,
          marginTop: 3,
        }}>
        <View
          style={{
            borderRadius: 10,
            width: 150,
            height: 'auto',
            backgroundColor: 'white',
            marginTop: 3,
            padding: 5,
          }}>
          <View>
            <Image
              style={{
                width: 130,
                marginTop: 7,

                height: 100,
                resizeMode: 'stretch',
              }}
              source={{uri: "https://i.pinimg.com/236x/03/66/92/0366926b487efd293674c78e67cc951a.jpg"}}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              color: '#cc6600',
              textAlign: 'center',
              fontWeight: 'bolder',
            }}>
            Brown sweats
          </Text>

          <Text style={{ textAlign: 'center' }}>
            <Text style={{ color: 'orange' }}>$</Text>
            <Text style={{ color: 'black', fontWeight: 'bolder' }}>
              100.00
            </Text>
          </Text>
        </View>

        <Ionicons name="remove-circle" size={20} />
        <Text>1</Text>
        <Ionicons name="add-circle" size={20} color="orange" />
      </View>






      <View>
        <View
          style={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 10,
            marginTop: 15,
          }}>
          <Text>
            <Text
              style={{
                color: '#cc6600',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Subtotal
            </Text>
            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'orange', marginLeft: 50 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                244.00
              </Text>
            </Text>
          </Text>

          <Text>
            <Text
              style={{
                color: '#cc6600',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Shipping fee
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'orange', marginLeft: 80 }}>$</Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bolder',
                  marginLeft: 100,
                }}>
                100.00
              </Text>
            </Text>
          </Text>

          <Text>------------------------------------------</Text>

          <Text>
            <Text
              style={{
                color: '#cc6600',
                textAlign: 'center',
                fontWeight: 'bolder',
              }}>
              Total
            </Text>

            <Text style={{ textAlign: 'center' }}>
              <Text style={{ color: 'orange', marginLeft: 110 }}>$</Text>
              <Text style={{ color: 'black', fontWeight: 'bolder' }}>
                344.00
              </Text>
            </Text>
          </Text>
        </View>
      </View>


<TouchableOpacity onPress={()=> {
     navigation.navigate("Checkout")
     }}
        style={{
          padding: 10,
          paddingHorizontal: 50,
          marginTop: 10,
          alignItems: 'center',
          borderRadius: 10,
          flexDirection: 'row',
          backgroundColor: 'orange',
        }}>
        <Text style={{ fontWeight: 'bolder', color: 'brown' }}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>




      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        }}>


        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons name="home" size={26} color="brown" style={{ marginLeft: 10 }} />
        </TouchableOpacity>

       
      

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('cartlist');
          }}>
          <Feather style={{marginLeft:5}}
                  name="shopping-bag"
                  size={20} 
                  color="brown" 
                 />
        </TouchableOpacity>

        


      </View>
    </View>
  );
}
