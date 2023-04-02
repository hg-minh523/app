import { io } from 'socket.io-client'
import { getToken } from './Storage';
export const SocketHandler = {
    sendNotify: async (socket) => {
        try {
            const value = getToken();
            if (value !== null) {
                socket.emit("SendNotify", {
                    value,
                })
            }
        } catch (error) {
            console.log(error)
        }
       
       
    },
    receiveNotify: async (socket,handleSearch) => {
        if(!!socket){
            socket.on("receiveNotify", () => {
            })
        }
    },
    connect: () => {
        
        return io("http://192.168.105.212:8888/");
    }
}