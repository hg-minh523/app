import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { height } = Dimensions.get("window")
const Welcome = ({navigation}) => (
  <>
    <View style={{backgroundColor: 'white'}}>
      <ImageBackground
        style={{
          height: height / 2,
        }}
        source={require("../../assets/background.jpg")} resizeMode="cover" >
      </ImageBackground>
    </View>
    <View
      style={
        {
          paddingHorizontal: 16,
          paddingTop: 8
        }
      }
    >
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          color: "#36648B",
          fontFamily: 'poppins-bold'
        }}
      >
        Demo Mobile Application
      </Text>
      <Text
        style={{
          paddingTop: 16,
          fontSize: 32,
          textAlign: 'center',
          color: "#1C1C1C",
          fontFamily: 'poppins-bold'
        }}
      >
        Select your option
      </Text>
      <View
        style={{
          paddingTop: 80,
          flexDirection: 'row',
          paddingHorizontal: 16,
          // marginHorizontal: 4
        }}
      >
        <TouchableOpacity
         onPress={() => navigation.navigate('Login')}
          style={{
            paddingVertical: 20,
            backgroundColor: "#36648B",
            width: "48%",
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: "white",
              textAlign: 'center'
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => navigation.navigate('Register')}
          style={{
            paddingVertical: 20,
            // backgroundColor:"#36648B",
            width: "48%",
            borderRadius: 10
          }}
         
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: "#36648B",
              textAlign: 'center'
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);


export default Welcome;