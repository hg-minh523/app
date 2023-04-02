import { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Text, TouchableOpacity, View } from 'react-native';
import { cartApi } from '../api/cart.api';
import { SocketHandler } from '../commom/NotiffyHandler';
import { CartContext } from '../Context/CartContext';
import InputApp from './Input';
import { notificationAPI } from '../api/notify.api';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get("window")

const FlyCheckOut = ({ checkFly }) => {
    const fadeAnim = useRef(new Animated.Value(height*2)).current;
    const { productList, isOpen } = useContext(CartContext)
    const [socket, setSocket] = useState(null);
    const navigation = useNavigation();
    const [selectModel, setSelectModel] = useState({});
    // Set Socket
    useEffect(() => {
        const socket = SocketHandler.connect();
       setSocket(socket);
    },[])

    useEffect(() => {
        SocketHandler.receiveNotify(socket,handleSearch)
    }, [socket])

    const handleSearch = async () => {
        const notifyList = await notifyList.search({});
        
    }
    const handleOk = async () => 
    {
        selectModel.Status = 'new',
        selectModel.Product_List = productList
        const data =await notificationAPI.create(selectModel);
        await SocketHandler.sendNotify(socket);
        if(data.msg === 'success'){
            const notify = await cartApi.create(selectModel)
            if(notify.msg === 'success'){
                navigation.navigate("Notification");
            }
        }
        
    }

    const handleChangeAddress = (value) => {
        setSelectModel({
            ...selectModel,
            Address: value
        })
    }

    const handleChangeNote = (value) => {
        setSelectModel({
            ...selectModel,
            Cart_Note: value
        })
    }

    const handleChangePhone = (value) => {
        setSelectModel({
            ...selectModel,
            Cart_PhoneNumber: value
        })
    }
    const handleMethodPay = (value) => {
        setSelectModel({
            ...selectModel,
            Cart_MethodPay:'Cash'
        })
    }

    useEffect(() => {
        if(isOpen == true){
            Animated.timing(fadeAnim, {
                toValue: height,
                duration: 250,
                easing: Easing.cubic,
                useNativeDriver: true,
              }).start()
        }
            
        
        

    }, [isOpen])
    return (
        <Animated.View style={[{
            position: "absolute",
            bottom: 0,
            left: 0,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            zIndex: 2,
            right: 0,
            backgroundColor: "#EEEEEE",
            height: height,
        },
        { transform: [{ translateY: fadeAnim }] }
        ]}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, paddingVertical: 8, color: '#181818' }}>CHECKED INFORMATION</Text>
                </View>
                <InputApp
                    placeholder="Address"
                    value={selectModel.Address  || ''}
                    onChangeText={handleChangeAddress}

                ></InputApp>
                <InputApp
                    placeholder="Note"
                    value={selectModel.Cart_Note || ''}
                    onChangeText={handleChangeNote}

                ></InputApp>
                <InputApp
                    placeholder="Phone"
                    value={selectModel.Cart_PhoneNumber || ''}
                    onChangeText={handleChangePhone}

                ></InputApp>
                <InputApp
                    placeholder="Method Pay"
                    value=''
                    onChangeText={handleMethodPay}

                ></InputApp>
               <TouchableOpacity
                    onPress={handleOk}
                    style={{
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: -60,
                        borderRadius: 10,
                        backgroundColor: '#36648B',
                        padding: 12,
                        flexDirection: 'row',
                        justifyContent: 'center'
                        // height: "100%"
                    }}
               >
                    <Text style={{
                        fontSize: 24,
                        color: '#FFFFFF'
                    }}>
                        OK
                    </Text>
               </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

export default FlyCheckOut;