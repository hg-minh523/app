import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const SearchComponent = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: "100%",
                padding: 16
            }}
        >
            <View
                style={{
                    // width: "80%"
                    flex: 3
                }}
            >
                <TextInput
                    placeholder='Search product'
                    placeholderTextColor={props.color}
                    style={{
                        borderWidth: 1.5,
                        height: 40,
                        fontSize: 18,
                        padding: 11,
                        borderRadius: 5,
                        color: props.color,
                        borderColor: props.color,
                        width: "100%"
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'space-evenly'
                }}
            >
                <Icon name="shoppingcart" size={28} color={props.color}></Icon>
                <Icon name="message1"  size={28} color={props.color}></Icon>

            </View>
        </View>
    )
}

export default SearchComponent;