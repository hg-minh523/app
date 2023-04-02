import React, { useContext, useState } from 'react';
// import {use}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderFlexiable from '../../Component/HeaderFlexible';
import ProductCard from '../../Component/ProductCard';
import { ProductContext } from '../../Context/ProductContext';
import Footer from '../Footer/Footer';
const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("window")

const HomePage = ({ navigation }) => {
    const { product } = useContext(ProductContext);
    const [dataSouce, setDataSource] = useState(product);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <View
                style={{
                    flex: 0.9
                }}
            >
                <View
                >
                    <ImageBackground
                        style={{
                            height: height / 3,
                        }}
                        source={require("../../assets/banner2.jpg")} resizeMode='cover' >
                        <HeaderFlexiable backgroundColor='' notify={false} color='black' />

                    </ImageBackground>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        paddingVertical: 12
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#DDDDDD',
                                height: 50,
                                width: 50,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Icon name="appstore-o" size={32} color="black"></Icon>
                        </TouchableOpacity>
                        <Text>Category</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#DDDDDD',
                                height: 50,
                                width: 50,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Icon name="bells" size={32} color="black"></Icon>
                        </TouchableOpacity>
                        <Text>Notification</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#DDDDDD',
                                height: 50,
                                width: 50,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Icon name="database" size={32} color="black"></Icon>
                        </TouchableOpacity>
                        <Text>Bill</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#DDDDDD',
                                height: 50,
                                width: 50,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Icon name="earth" size={32} color="black"></Icon>
                        </TouchableOpacity>
                        <Text>Data Plan</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#DDDDDD',
                                height: 50,
                                width: 50,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Icon name="profile" size={32} color="black"></Icon>
                        </TouchableOpacity>
                        <Text>Profile</Text>
                    </View>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                    <Icon name="ellipsis1" size={32} color="black"></Icon>

                </View>
                {/* Product */}
                <View
                    style={{
                        backgroundColor: "rgba(119,136,153,0.1)"

                    }}
                >
                    <View style={{ paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 400
                            }}
                        >
                            Best sale product
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ProductList")}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: "#1F41BB"
                                }}
                            >
                                See more
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            padding: 16,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        {!!dataSouce && dataSouce.length > 0 ? dataSouce.map((item, index) => {
                            if (index < 2) {
                                return (
                                    <ProductCard onNavigate={() => navigation.navigate("ProductDetail", {id: item.id})} dataSource={item} key={item.id} />
                                )
                            }
                        }) : null}

                    </View>
                </View>
            </View>
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




export default HomePage;