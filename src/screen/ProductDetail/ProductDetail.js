import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SceneMap, TabBar } from 'react-native-tab-view';
import ProductDetailHeader from "./ProductDetailHeader";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { productAPi } from '../../api/product.api';
import { formatMoney } from '../../utils';
const { height } = Dimensions.get("window")

const FirstRoute = ({ routes }) => {
    return (
        <View style={{ backgroundColor: '#673ab7', color: 'black' }}>
            <Text>123123213</Text>
        </View>

    )
};

const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7', color: 'black' }} />
);

const renderTabBar = props => {
    return (
        <TabBar
            {...props}

            renderLabel={({ focused, route }) => {
                return (
                    <Text
                        size={24}
                        category="Medium"
                        color={"Black"}>
                        {route.title}
                    </Text>
                );
            }}
            style={{
                backgroundColor: 'none'
            }}
        />
    );
};
const initialLayout = { width: Dimensions.get('window').width };
// Main component
const ProductDetail = ({ route, navigation }) => {
    const { id } = route.params;
    const [index, setIndex] = React.useState(0);
    const [dataSouce, setDataSouce] = useState({})
    const [images, setImages] = useState({})


    const [routes] = React.useState([
        { key: 'first', title: 'Detail Item' },
        { key: 'second', title: 'Reviews' },
    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });
    useEffect(() => {
        const getProductById = async () => {
            const dataS = await productAPi.getById(id);
            return dataS.data;
        }
        getProductById().then(result => {
            const imgArr = result.Product_Images.split(",");
            setImages(imgArr);
            setDataSouce(result)
        });
    }, [id])
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,225)' }}>
            <View style={{ flex: 0.1 }}>

                <ProductDetailHeader />
            </View>
            <ScrollView
                style={{
                    flex: 0.8,
                    backgroundColor: "rgba(119,136,153,0.1)"

                }}
            >
                <Image
                    source={{
                        uri: `http://192.168.22.127:4000/product/${images[index]}`,
                    }}
                    style={{
                        marginHorizontal: 16,
                        height: height / 2 - 50,
                        opacity: 2,
                        borderRadius: 10
                    }}
                    resizeMode='contain'
                >
                </Image>
                <View style={{ padding: 16 }}>
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            paddingVertical: 8
                        }}
                    >
                        {/* Product promotion */}

                        <Text
                            style={{
                                paddingHorizontal: 16,
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 700
                            }}
                        >
                            {dataSouce.Product_Name}
                        </Text>
                        <Text
                            style={{
                                paddingHorizontal: 16,
                                color: 'gray',
                                fontSize: 16,
                                fontWeight: 600
                            }}
                        >
                            {dataSouce?.Product_Group?.Product_Group_Name}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignContent: 'center',
                                paddingHorizontal: 16
                            }}
                        >
                            {!!images && images.length > 0 ? images.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => setIndex(index)}
                                    >
                                        <Image
                                            source={{
                                                uri: `http://192.168.22.127:4000/product/${item}`,
                                            }}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                margin: 12,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                            }}
                                        ></Image>
                                    </TouchableOpacity>

                                )
                            })
                                : null}
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                flexDirection: "row",
                                paddingVertical: 12,
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18
                                }}
                            >4.9 Rating</Text>
                            <Text style={{
                                fontSize: 18
                            }}>2.3k + Reviews</Text>
                            <Text style={{
                                fontSize: 18
                            }}>2.9k + Sold</Text>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                flexDirection: 'row',
                                justifyContent: 'space-between',

                            }}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Icon name="truck-fast-outline" size={28} color="gray"></Icon>

                                <Text style={{ paddingHorizontal: 4 }}>Free ship</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Icon name="shield-check-outline" size={28} color="gray"></Icon>

                                <Text style={{ paddingHorizontal: 4 }}>100% Genuine</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Icon name="keyboard-return" size={28} color="gray"></Icon>

                                <Text style={{ paddingHorizontal: 4 }}>Free return</Text>
                            </View>


                        </View>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                marginTop: 8
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 18,
                                    fontWeight: 700,
                                }}
                            >Desciprtion: </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                }}
                            >{dataSouce.Product_Detail}
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 16,
                                marginTop: 8
                            }}
                        >
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 18,
                                    fontWeight: 700,
                                }}
                            >Comment: </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingVertical: 8
                                }}
                            >
                                <Image
                                    source={require("../../assets/123.jpg")}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 10
                                    }}
                                ></Image>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        paddingLeft: 8
                                    }}
                                >
                                    <Text>Gia Minh</Text>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}
                                    >
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                    </View>
                                    <Text style={{
                                        fontSize: 16,
                                    }}>Chất lượng sản phẩm tốt, sài rất hiệu quả1111111111111.</Text>

                                </View>
                            </View>
                            <View style={{borderWidth: 0.2,width: "100%",marginVertical: 8, color: "rgba(119,136,153,0.1)"}}></View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingVertical: 8
                                }}
                            >
                                <Image
                                    source={require("../../assets/123.jpg")}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 10
                                    }}
                                ></Image>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly',
                                        paddingLeft: 8
                                    }}
                                >
                                    <Text>Doan Canh</Text>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}
                                    >
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star" size={20} color="yellow"></Icon>
                                        <Icon name="star-half-full" size={20} color="yellow"></Icon>
                                    </View>
                                    <Text style={{
                                        fontSize: 16,
                                    }}>Chất lượng sản phẩm tốt, sài rất hiệu quả1111111111111.</Text>

                                </View>
                                
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>



            <View style={{
                padding: 16,
                flex: 0.1,
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            >
                <View>
                    <Text style={{
                        fontSize: 20,
                        color: 'black'
                    }} >Total price: </Text>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#36648B'
                    }}>{formatMoney(dataSouce.Product_Price)}</Text>
                </View>

                <View
                    style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Cart", {
                            data: dataSouce,
                            images: images
                        })}
                        style={{
                            borderRadius: 10,
                            backgroundColor: '#36648B',
                            paddingVertical: 16,
                            width: 120,
                            alignItems: 'center',
                        }}
                    ><Text
                        style={{
                            fontSize: 18,
                            color: 'white',
                        }}
                    >Buy now</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default ProductDetail;