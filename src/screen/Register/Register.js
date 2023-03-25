import React, { useState } from 'react';
// import {use}
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { authApi } from '../../api/auth.api';
import InputApp from '../../Component/Input';
const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleChangeEmail = (value) => {
        setEmail(value);
    }
    const handleChangePassword = (value) => {
        setPassword(value);
    }

    const handleConfirmPassWord = (value) => {
        setConfirmPassword(value)
    }

    const handleRegister = async () => {
        if (password === confirmPassword){
            const data = {
                User_Account_Name: email,
                User_Account_Password: password,
                User_Account_Permission: 'admin',
                Status: 'New'
            }
            Promise.all([authApi.register(data)]).then(result => {
            }).catch(e => console.log(e))
         
            // if (user.data){
            //     navigation.navigate("Login");
            // }
        }
    }
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    paddingHorizontal: 16,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        paddingTop: 20,
                        fontSize: 40,
                        color: "#36648B",

                    }}>
                        Create account
                    </Text>
                    <Text style={{
                        paddingTop: 16,
                        fontSize: 28,
                        textAlign: 'center'
                    }}>
                        Create an acount so you can sign in application
                    </Text>
                </View>
                <View style={{ paddingTop: 80, paddingHorizontal: 16 }}>
                    <InputApp
                        placeholder="Email"
                        value={email}
                        onChangeText={handleChangeEmail}

                    ></InputApp>
                    <InputApp
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={handleChangePassword}
                    />
                    <InputApp
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        secureTextEntry={true}
                        onChangeText={handleConfirmPassWord}
                    />
                </View>

                <View
                    style={{
                        paddingTop: 80,
                        paddingHorizontal: 16
                    }}
                >
                    <TouchableOpacity
                        onPress={handleRegister}
                        style={{
                            paddingVertical: 20,
                            backgroundColor: "#36648B",
                            borderRadius: 10,
                            marginVertical: 8
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
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}

                        style={{
                            paddingVertical: 20,
                            borderRadius: 10
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '500',
                                color: "black",
                                textAlign: 'center'

                            }}
                        >
                            Already you have an acount.
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}




export default Register;