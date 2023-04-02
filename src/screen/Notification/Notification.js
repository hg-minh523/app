import { useEffect, useState, useContext } from "react"
import HeaderFlexiable from "../../Component/HeaderFlexible"
import { notificationAPI } from "../../api/notify.api"
import { SocketHandler } from "../../commom/NotiffyHandler"
import { getInforUser } from "../../commom/Storage"
import Footer from "../Footer/Footer"
import NotiicationDetail from "./NotificationDetail"
import { CartContext } from "../../Context/CartContext"
import { NotifyContext } from "../../Context/NotifyContext"
const { View } = require("react-native")

const Notification = () => {
    const [socket, setSocket] = useState(null);
    const { handleOpen } = useContext(CartContext)
    const { handleSetList } = useContext(NotifyContext)
    const [dataSource, setDataSource] = useState([]);
    const handleSearch = async () => {
        const userInfor = await getInforUser();
        const searchModel = {
            Notification_To: Number.parseInt(userInfor),
            Status: "accept"
        }
        const notifyList = await notificationAPI.search(searchModel);
        handleSetList(notifyList.results)
        setDataSource(notifyList.results)
    }
    useEffect(() => {
        const value = SocketHandler.connect();
        setSocket(value)
        handleOpen(false);
        handleSearch()
    }, [])

    useEffect(() => {
        socket?.on("sendStatusOrder", handleSearch)

    }, [socket])
    return (
        <View style={{
            flex: 1
        }}>
            <View
                style={{
                    flex: 0.1
                }}
            >
                < HeaderFlexiable backgroundColor='white' notify={true} color="black" />
            </View>
            <View
                style={{
                    flex: 0.8,
                }}
            >

                {!!dataSource && dataSource.length > 0 ? dataSource.map((item, index) => <NotiicationDetail key={index} dataSource={item} />) : ''}
            </View>

            <View
                style={{
                    flex: 0.1
                }}
            >
                <Footer  />
            </View>
        </View>
    )
}

export default Notification