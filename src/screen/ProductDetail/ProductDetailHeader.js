import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const ProductDetailHeader = ({ navigation }) => {
    const [status, setStatus] = useState(false);
    return (
        <View
            style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "100%",
                padding: 16
            }}
        >
            <View
                style={{
                    flex: 2
                }}
            >
                <TouchableOpacity
                    // onPress={() => navigation.navigate("ProductList")}
                >
                    <Icon name="left" size={24} color="black"></Icon>
                </TouchableOpacity>

            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1.5,
                    justifyContent: 'space-evenly'
                }}
            >
                <TouchableOpacity
                    onPress={() => setStatus(true)}
                >
                    {status ? <Icon name="heart" size={24} color="red"></Icon> : <Icon name="hearto" size={24} color="black"></Icon>}

                </TouchableOpacity>


                <Icon name="fork" size={24} color="black"></Icon>
                <TouchableOpacity
                    // onPress={() => navigation.navigate("Cart")}
                >

                    <Icon name="shoppingcart" size={24} options={{ tabBarBadge: 3 }} color="black"></Icon>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProductDetailHeader;