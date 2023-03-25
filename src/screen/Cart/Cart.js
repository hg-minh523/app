import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { formatMoney } from "../../utils";
import Footer from "../Footer/Footer";
import CartDetail from "./CartDetail";

const Cart = ({ route, navigation }) => {
    const { data, images } = route.params;
    const [dataSource, setDataSource] = useState([]);
    const [total,setTotal] = useState(0);
    useEffect(() => {
        dataSource.push(data);
    
        setDataSource([...dataSource]);
    }, [data])
    const handleRemove = (i) => {
        dataSource.pop(dataSource[i]);
        setDataSource([...dataSource]);
    }
    useEffect(() => {
        const totalData = dataSource.reduce((preValue, currentValue) => preValue + currentValue.Product_Price * currentValue.Quantity,0);
        setTotal(totalData)
    },[dataSource])
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
                flex: 1
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    flex: 0.1,
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
                                color: 'white'
                            }}
                        >Checkout</Text>
                        <Icon name="arrowright" size={30} color="white"></Icon>

                    </TouchableOpacity>
                </View>
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
                        <CartDetail setTotalCart={setTotalCart} index={index} handleRemove={handleRemove} images={images} dataSource={item} key={index}/>
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