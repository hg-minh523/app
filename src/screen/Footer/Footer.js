import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/AntDesign';
import { View } from 'react-native';

const HomeScreen = () => {
    return (
        <></>
    )
}
const Footer = () => {
    return (
      
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: {
                fontSize: 13,
                color: 'black',
                headerShown: 'none'
            },
            tabBarIcon: ({ focused, color, size }) => {
                return <Icon name={route.name} size={28} color='black' />;
            },
        })}>
            <Tab.Screen key="home" name="home"component={HomeScreen}  options={{ title: 'Home' }} />
            <Tab.Screen  key="user" name="user" component={HomeScreen}  options={{ title: 'User' }}/>
            <Tab.Screen  key="bells" name="bells"  options={{ tabBarBadge: 3 , title: 'Notiication'}}  component={HomeScreen} />
            <Tab.Screen  key="settings" name="setting" component={HomeScreen}    options={{ title: 'Settings' }}/>


        </Tab.Navigator>
    )
}

export default Footer;