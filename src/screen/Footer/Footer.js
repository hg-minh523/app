import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NotifyContext } from '../../Context/NotifyContext';
import { useContext, useEffect, useState } from 'react'
const Tab = createBottomTabNavigator();

function EmtyComponent({ navigation }) {
    return (
        <></>
    );
}
const Footer = () => {
    const navigation = useNavigation()
    const { notifyList } = useContext(NotifyContext)
    const [quantity,setQuantityNotify] = useState(0);
    useEffect(() => {
        setQuantityNotify(notifyList.length)
    },[notifyList])
    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: {
                fontSize: 13,
                color: 'black',
            },
            tabBarIcon: ({ focused, color, size }) =>
                <Icon name={route.name} size={28} color='black' />
        })}>
            <Tab.Screen
                listeners={{
                    tabPress: e => {
                        navigation.navigate("HomePage")
                    }
                }}
                key="home"
                name="home"
                component={EmtyComponent}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                key="user"
                name="user"
                component={EmtyComponent}
                options={{ title: 'User' }} />
            <Tab.Screen
                key="bells" name="bells"
                listeners={{
                    tabPress: e => {
                        navigation.navigate("Notification")
                    }
                }}
                options={{ tabBarBadge: quantity, title: 'Notification' }}
                component={EmtyComponent} />
            <Tab.Screen
                key="settings"
                name="setting"
                component={EmtyComponent}
                options={{ title: 'Settings' }} />


        </Tab.Navigator>
    )
}

export default Footer;