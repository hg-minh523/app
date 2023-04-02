
import { useContext, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import HeaderFlexiable from "../../Component/HeaderFlexible";
import ProductCard from "../../Component/ProductCard";
import { ProductContext } from "../../Context/ProductContext";
import Footer from "../Footer/Footer";
const { width, height } = Dimensions.get('window')

const HomeScreen = () => {
    return (
        <></>
    )
}
const ProductList = ({ navigation }) => {
    const { product } = useContext(ProductContext)
    const [dataSouce, setDataSource] = useState(product);
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
            <HeaderFlexiable backgroundColor='white' notify={false} color='black'/>
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