import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
    const value = await AsyncStorage.getItem('token');
    return value
}

export const getInforUser = async () => {
    const value = await AsyncStorage.getItem('userInfor');
    return value
}