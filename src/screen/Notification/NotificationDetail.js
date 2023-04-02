import { View, Image, TouchableOpacity, Text } from 'react-native'
import { useEffect, useState } from 'react'
const NotiicationDetail = (props) => {
    const {dataSource} = props;
    const [data, setData] = useState({});
    useEffect(() => {
        setData(dataSource);
    }, [dataSource])
    return <TouchableOpacity>
        <View
            style={{
                padding: 8,
                marginVertical: 4,
                marginHorizontal: 8,
                borderRadius: 10,
                justifyContent: 'center',
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
                        width: 50,
                        height: 50
                    }}
                    source={require('../../assets/123.jpg')}

                ></Image>
            </View>

            <View
                style={{
                    flex: 0.9,
                    marginLeft: 8,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#36648B',
                        }}
                    >{data.Notification_Content + ' '+data.Notification_Code}</Text>
                </View>
                <View>
                    <Text
                        style={{
                            fontSize: 14,
                            color: 'black'
                        }}
                    >{data.Notification_Content_Detail}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}


export default NotiicationDetail