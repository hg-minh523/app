import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Quantity = ({ quantity, handleSetQuantity }) => {
    const handleIncrement = () => {
        handleSetQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        handleSetQuantity(quantity - 1)
    }
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
              <TouchableOpacity
                onPress={handleDecrement}

                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#EEEEEE',
                    borderRadius: 100,
                    width: 16,
                    height: 16
                }}
            >

                <Text>-</Text>
            </TouchableOpacity>
            
            <Text style={{ marginHorizontal: 4 }}>{quantity}</Text>
          
            <TouchableOpacity
                onPress={handleIncrement}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#EEEEEE',
                    borderRadius: 100,
                    width: 16,
                    height: 16
                }}
            >

                <Text
                    style={{ fontSize: 13 }}
                >+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Quantity;