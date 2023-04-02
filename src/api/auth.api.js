import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://192.168.105.212:4000/api/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});
export const authApi = {
    register: (data) => {
        // instance.post("http://localhost:4000/api/v1/user/register",data)
        fetch('http://192.168.105.212:4000/api/v1/user/register', {
            method: 'POST',
            headers: {
                // Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },

    login: (data) => {
        instance.post("user/login", data)
    },
}