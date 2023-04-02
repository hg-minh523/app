import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import InputApp from '../../Component/Input';
import { userAPI } from '../../api/user.api';
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = (value) => {
        setUsername(value);
    }
    const handleChangePassword = (value) => {
        setPassword(value);
    }

    const handleLogin = async () => {
        const data = {
            User_Account_Name: username,
            User_Account_Password: password,
        }

        const user = await fetch('http://192.168.105.212:4000/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(error => {
                console.error(error);
            });
        try {
            await AsyncStorage.clear();
            await AsyncStorage.setItem('token', user.accessToken.token);
            const userInfor = await userAPI.getUserInfor()
            await AsyncStorage.setItem('userInfor',`${userInfor.id}`);

        } catch (error) {
            
        }
        if (user.msg !== "Fail to  login") {
            navigation.navigate("HomePage");
        } else {
            Alert.alert("Wrong password")
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
                        Login here
                    </Text>
                    <Text style={{
                        paddingTop: 16,
                        fontSize: 28,
                        textAlign: 'center'
                    }}>
                        Welcom back you've been missed!
                    </Text>
                </View>
                <View style={{ paddingTop: 80, paddingHorizontal: 16 }}>
                    <InputApp
                        placeholder="Username"
                        value={username}
                        onChangeText={handleChangeUsername}

                    ></InputApp>
                    <InputApp
                        placeholder="Password"
                        value={password}
                        secureTextEntry={true}
                        onChangeText={handleChangePassword}
                    />
                    <Text
                        style={{
                            color: "#36648B",
                            fontSize: 18,
                            alignSelf: 'flex-end'
                        }}
                    >Forgot your password?</Text>
                </View>

                <View
                    style={{
                        paddingTop: 80,
                        paddingHorizontal: 16
                    }}
                >
                    <TouchableOpacity
                        onPress={handleLogin}
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
                            Sign in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}

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
                            Create new account
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}




export default Login;