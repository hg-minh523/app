import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
// Screen
import Cart from './Cart/Cart';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductDetailHeader from './ProductDetail/ProductDetailHeader';
import ProductList from './ProductList/ProductList';
import Register from './Register/Register';
import Welcome from './Welcome/Welcome';
import Notification from './Notification/Notification';
// Context
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';
import { NotifyContext } from '../Context/NotifyContext';
// API
import { productAPi } from '../api/product.api';
import { notificationAPI } from '../api/notify.api';
import { getInforUser } from '../commom/Storage';
// Component
const Stack = createNativeStackNavigator();

const Admin = () => {
    const [dataSource, setDataSource] = useState([]);
    const [ dataCart, setDataCart ] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [notifyList, setNotifyList] = useState([])

    useEffect(() => {
        const getProductList = async () => {
            const dataS = await productAPi.search({})
            return dataS
        }
         const getNotifyList = async () => {
            const userInfor = await getInforUser();
            const searchModel = {
                Notification_To: Number.parseInt(userInfor),
                Status: "accept"
            }
            const notifyList = await notificationAPI.search(searchModel);
            return notifyList
        }
        getProductList().then(result => setDataSource(result.results));
        getNotifyList().then(result => setNotifyList(result.results));

    }, [])
    // Handle Cart 
    const handleOpen = (boolean) => {
        setIsOpen(boolean)
    }
    const handleAdd = (data) => {
        if (!!data) dataCart.push(data)
    }

    const handleRemove = (id) => {
       const newData = dataCart.reduce((pre,cur,index) => {
            if (index === id ){
                return [...pre]
            }
            return [...pre,cur]
        },[])
        setDataCart([...newData])
    }
    // Handle Set list
    const handleSetListNotify = (data) => {
        setNotifyList(data)
    } 
    // Init value Context
    const cartContextValue = {
        productList: dataCart,
        isOpen: isOpen,
        handleOpen: handleOpen,
        handleAddProduct: handleAdd,
        handleRemoveProduct: handleRemove
    }
    const productContextValue = {
        product: dataSource,
    }

    const notifyContextValue = {
        notifyList: notifyList,
        handleSetList: handleSetListNotify
    }
    return (
        <ProductContext.Provider value={productContextValue}>
            <CartContext.Provider value={cartContextValue}>
                <NotifyContext.Provider value={notifyContextValue}>
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
                        <Stack.Screen name="HomePage" component={HomePage} />
                        <Stack.Screen name="ProductDetail" component={ProductDetail} />
                        <Stack.Screen name="ProductList" component={ProductList} />
                        <Stack.Screen name="Cart" component={Cart} />
                        <Stack.Screen name="ProductDetailHeader" component={ProductDetailHeader} />
                        <Stack.Screen name="Notification" component={Notification} />

                    </Stack.Navigator>
                </NavigationContainer>
                </NotifyContext.Provider>
            </CartContext.Provider>

        </ProductContext.Provider>

    );
};

export default Admin;