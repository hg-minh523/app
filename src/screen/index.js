import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import SearchComponent from '../Component/Search';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductList from './ProductList/ProductList';
import Register from './Register/Register';
import Welcome from './Welcome/Welcome';
import Cart from './Cart/Cart';
import ProductDetailHeader from './ProductDetail/ProductDetailHeader';
const Stack = createNativeStackNavigator();
const Admin = () => {
    return (
        <NavigationContainer  >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomePage" component={HomePage}  />
                <Stack.Screen name="ProductDetail" component={ProductDetail}  />
                <Stack.Screen name="ProductList" component={ProductList}  />
                <Stack.Screen name="Cart" component={Cart}  />
                <Stack.Screen name="ProductDetailHeader" component={ProductDetailHeader}  />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Admin;