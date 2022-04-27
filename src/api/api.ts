import axios from "axios";
import {ChatType} from "../redux/chatsReducer";
import {MessagesStateType} from "../redux/messageReducer";

const instance = axios.create({
    baseURL: 'https://api.clout.one/test/',
})
export const api = {
    getChat() {
        return instance.get<ChatType>('chat.get')
    },
        getMessage(id:string) {
        return instance.get<MessagesStateType>(`message.get?chat_id=${id}&limit=20`)
    },

}