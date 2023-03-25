import { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Quantity from '../../Component/Quantity';
import { formatMoney } from '../../utils';
const { height, width } = Dimensions.get("window")

const CartDetail = (props) => {
    const [quantity, setQuantity] = useState(1);
    const {dataSource, images, handleRemove,index } = props
    const handleRemoveMain = () => {
        handleRemove(index);
    }
    useEffect(() => {
        dataSource.Quantity = quantity;
        props.setTotalCart(dataSource);
    },[quantity])
    const handleSetQuantity  = (value) => {
        if (value > 0){
            setQuantity(value)
        }
    }

    return (
       
        <View
        style={{
            padding: 8,
            marginVertical: 4,
            width: width - 16* 2,
           borderRadius: 10,
            backgroundColor: 'white',
            flexDirection: 'row'
        }}
    >

        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Image
                style={{
                    width: 75,
                    height: 75
                }}
                source={{
                    uri: `http://192.168.22.127:4000/product/${images[0]}`,
                }}

            ></Image>
        </View>

        <View
            style={{
                flex: 0.9,
                marginLeft: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'black'
                    }}
                >{dataSource.Product_Name}</Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: 'gray'
                    }}
                >{dataSource.Product_Group.Product_Group_Name}</Text>
               <Quantity handleSetQuantity={handleSetQuantity} quantity={quantity}/>
                <Text
                    style={{
                        fontSize: 18,
                        marginTop: 12,
                        color: '#36648B',
                        fontWeight: 600
                    }}
                >{formatMoney(dataSource.Product_Price * quantity)}</Text>

            </View>
            <TouchableOpacity
                onPress={handleRemoveMain}
                style={{
                    flexDirection: 'row',
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: 16
                    }}
                >X</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default CartDetail;