import SearchComponent from "../../Component/Search";
import Icon from 'react-native-vector-icons/AntDesign';

import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import Footer from "../Footer/Footer";
import { productAPi } from "../../api/product.api";
import { useEffect, useState } from "react";
import ProductCard from "../../Component/ProductCard";
const { width, height } = Dimensions.get('window')

const HomeScreen = () => {
    return (
        <></>
    )
}
const ProductList = ({ navigation }) => {
    const [dataSouce, setDataSource] = useState([]);
    useEffect(() => {
        const getProductList = async () => {
            const dataS = await productAPi.search({})
            return dataS
        }
        getProductList().then(result => setDataSource(result.results))
    }, [])
    return (
        <View
            style={{
                flexDirection: 'column',
                flex: 1,
                height: height,
                backgroundColor: 'white',
                justifyContent: 'space-between'
            }}
        >
            <SearchComponent color={"black"} />
            <View
                style={{
                    flex: 0.9,
                    backgroundColor: "rgba(119,136,153,0.1)"
                }}
            >
                <ScrollView>
                    <View
                        style={{
                            paddingHorizontal: 16,
                            marginTop: 8,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        {!!dataSouce && dataSouce.length > 0 ? dataSouce.map((item, index) => {
                            return (
                                <ProductCard onNavigate={() => navigation.navigate("ProductDetail", {id: item.id})} dataSource={item} key={item.id} />
                            )

                        }) : null}

                    </View>
                </ScrollView>
            </View>
            <View
                style={{
                    flex: 0.10,
                    width: width,
                    height: 200
                }}
            >
                <Footer />
            </View>

        </View>
    )
}

export default ProductList;