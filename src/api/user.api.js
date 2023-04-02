import { getToken } from '../commom/Storage';

export const userAPI = {
    getUserInfor: async (data) => {
        const token = await getToken()
        const dataS = await fetch('http://192.168.105.212:4000/api/v1/user/getUserInformation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authentication': `Beerer ${token}`
            },
        }).then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(error => {
                console.error(error);
            });
        return dataS
    },
    register: async (data) => {
        const token = await getToken()
        const dataS = await fetch('http://192.168.105.212:4000/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authentication': `Beerer ${token}`
            },
            body: JSON.stringify(data),

        }).then(response => response.json())
            .then(json => {
                return json;
            })
            .catch(error => {
                console.error(error);
            });
        return dataS
    },

}