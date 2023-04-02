import { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { CartContext } from '../Context/CartContext';
import Quantity from './Quantity';
import { useNavigation } from '@react-navigation/native';

const HeaderFlexiable = (props) => {
    const { productList } = useContext(CartContext)
    const [cartQuantity, setCartQuantity] = useState(0)
    const navigation = useNavigation()
    useEffect(() => {
        setCartQuantity(productList.length)
    },[productList])


    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: props.backgroundColor,
                width: "100%",
                padding: 16
            }}
        >
            <View
                style={{
                    flex: 3
                }}
            >
                {props.notify ?   <Text
                    style={{
                        fontSize: 24,
                        color: '#36648B',

                    }}
                >Notification</Text>:  <TextInput
                placeholder='Search product'
                placeholderTextColor={props.color}
                style={{
                    borderWidth: 1.5,
                    height: 40,
                    fontSize: 18,
                    padding: 11,
                    borderRadius: 5,
                    color: props.color,
                    borderColor: props.color,
                    width: "100%"
                }}
            />}
              
                  
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'space-evenly'
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Cart",{images: []})}
                    style={{
                        position: 'relative'
                    }}
                >
                    <Icon name="shoppingcart" size={28} color={props.color}></Icon>
                   {cartQuantity > 0 ? <View 
                        style={{
                            width:18,
                            height:18,
                            backgroundColor:'red',
                            borderRadius: 18/2,
                            position: 'absolute',
                            right: -10,
                            top: -7,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    ><Text
                        style={{
                            color: 'white',
                            fontSize: 13
                        }}
                    >{cartQuantity}
                    </Text>
                    </View> 
                    :''}
                </TouchableOpacity>
                <Icon name="message1" size={28} color={props.color}></Icon>

            </View>
        </View>
    )
}

export default HeaderFlexiable