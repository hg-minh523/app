import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { CartContext } from "../../Context/CartContext";
import { formatMoney } from "../../utils";
import Footer from "../Footer/Footer";
import CartDetail from "./CartDetail";
import FlyCheckOut from "../../Component/FlyCheckout";
const Cart = ({ route }) => {
    const { images } = route.params;
    const { productList, handleOpen } = useContext(CartContext)

    const [dataSource, setDataSource] = useState(productList);
    const [total,setTotal] = useState(0);

    // Function handler event change 
    useEffect(() => {
        setDataSource(productList)
        const totalData = dataSource.reduce((preValue, currentValue) => preValue + currentValue.Product_Price * currentValue.Quantity,0);
        setTotal(totalData)
    },[productList,dataSource])

    const handleSlideCartFly = () => {
        handleOpen(true)
    }

    const setTotalCart = (value) => {
       const newData = dataSource.map(item => {
        if (item.id === value.id){
            item = {...value}
        }
        return item;
       })
       setDataSource(newData)
    }

    return (
        <View
            style={{
                flex: 1,
                position: "relative",
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    flex: 0.1,
                    zIndex: 1,
                    paddingHorizontal: 16,
                    justifyContent: 'space-between',
                    alignItems: "center"
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 24
                        }}
                    >TOTAL</Text>
                    <Text
                        style={{
                            fontSize: 20,
                            color: '#36648B',
                            fontWeight: 600
                        }}
                    >{formatMoney(total)}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={handleSlideCartFly}
                        style={{
                            backgroundColor: '#36648B',
                            width: 160,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            paddingVertical: 12,
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                color: 'white',
                            }}
                        >Checkout</Text>
                        <Icon name="arrowright" size={30} color="white"></Icon>

                    </TouchableOpacity>
                </View>
                    <FlyCheckOut ></FlyCheckOut>
            </View>
            {/* Center */}
            <View
                style={{
                    marginTop: 8,
                    flexDirection: 'column',
                    flex: 0.8,
                    paddingHorizontal: 16,
                }}
            >
               {!!dataSource && dataSource.length > 0 ? dataSource.map((item,index) =>
                {
                    return (
                        <CartDetail setTotalCart={setTotalCart} index={index} images={images} dataSource={item} key={index}/>
                    )
                } 
               ) : ''} 

            </View>
            {/* Footer */}
            <View
                style={{
                    flex: 0.1
                }}
            >
                <Footer />

            </View>
        </View>
    )
}

export default Cart