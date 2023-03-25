const { TextInput } = require("react-native")

const InputApp = (props) => {
    return (
        <TextInput
        style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            fontSize: 20,
            borderRadius: 10,
            color: 'gray'
        }}
         {...props}   
        ></TextInput>
    )
}

export default InputApp;

