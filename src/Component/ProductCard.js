const { View, TouchableOpacity, Image, Text } = require("react-native")
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { formatMoney } from '../utils';
const ProductCard = (props) => {
    const { dataSource, onNavigate } = props
    const [imgArray, setImgArray] = useState([]);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        const imgArray = dataSource.Product_Images.split(",");
        setImgArray(imgArray)
    }, [dataSource])
    const handleStatusHeartChange = () => {
        setStatus(true)
    }
    return (

        <TouchableOpacity
            onPress={onNavigate}
            style={{
                backgroundColor: 'rgba(255, 250, 255,1)',
                width: "48%",
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 16,
                marginTop: 8
            }}
        >
            <View
                style={{
                    width: '100%',
                    height: 200,
                    position: 'relative',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingTop: 16
                }}
            >
                <Image
                    source={{
                        uri: `http://192.168.22.127:4000/product/${imgArray[0]}`,
                    }}
                    style={{
                        width: '100%',
                        height: '65%',
                        resizeMode: 'contain',
                    }}
                ></Image>
                <TouchableOpacity
                    onPress={handleStatusHeartChange}
                    style={{
                        position: 'absolute',
                        top:-8,
                        right: 0
                    }}
                >
                {!status ? <Icon name="hearto" size={18} color="black"></Icon> : <Icon name="heart" size={18} color="red"></Icon>}

                </TouchableOpacity>
                <Text
                    style={{
                        fontSize: 16,
                        color: 'gray',
                        fontWeight: '600',
                    }}>
                    {dataSource.Product_Group.Product_Group_Name}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        color: 'black',
                        fontWeight: '600',
                    }}>
                    {dataSource.Product_Name}
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 8,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>

                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                        }}>
                        <Icon name="star" size={16} color="yellow"></Icon>
                        4.9
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'black',
                        }}>
                        2613 like
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        color: '#36648B',
                        paddingBottom: 10
                    }}>
                    {formatMoney(dataSource.Product_Price)}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;