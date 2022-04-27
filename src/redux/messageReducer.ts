import exp from "constants";
import { AppStateType } from "./store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";

export type UserType = {
    "id": string,
    "name": string,
    "surname": string,
    "avatar": string,
    "you"?: boolean,
}
export type LastMessageChatType = {
    "created_at": number,
    "user_id": string,
    "user_name": string,
    "user_surname": string,
    "you": boolean,
    "message": string,
}
export type ChatResponseType = {
    "id": string,
    "created_at": number,
    "title": string,
    "avatar": string,
    "private": boolean,
    "last_message": LastMessageChatType,
    "count_unread": number,
    "users": UserType[]
}
export type ChatType = {
    "response": ChatResponseType[]
}
const initialState: ChatType = {
    "response": [
        {
            "id": "d24c89c8-9bea-4b6f-815e-b5ad2767d9df",
            "created_at": 1640545368,
            "title": "React Native - русскоговорящее сообщество",
            "avatar": "https://avatars.clout.one/l40wK0sdEPnf.png",
            "private": false,
            "last_message": {
                "created_at": 1650279600,
                "user_id": "feb0fc6d-0f64-49eb-bd81-b98ab01f9060",
                "user_name": "Denis",
                "user_surname": "Muratov",
                "you": false,
                "message": "Вопрос к тем кто работал с пушами в react-native-firebase v6. Тк в 6 версии нет отображения пушей, то советуют юзать react-native-firebase v6 + react-native-push-notifications."
            },
            "count_unread": 1,
            "users": [
                {
                    "id": "be215077-594e-4256-82e8-906625c69629",
                    "name": "Clout",
                    "surname": "Profi",
                    "avatar": "https://avatars.clout.one/O7bEEfltwNia.png",
                    "you": true
                },
                {
                    "id": "eb2ea715-f53b-4e7a-a42c-d9fdac0dce79",
                    "name": "Gena",
                    "surname": "Black",
                    "avatar": "https://ui-avatars.com/api/?name=Gena+Black&background=random",
                    "you": false
                },
                {
                    "id": "9639c6a3-f098-4a75-841a-d88cf5b04806",
                    "name": "Gevorg",
                    "surname": "Mirzoyan",
                    "avatar": "https://ui-avatars.com/api/?name=Gevorg+Mirzoyan&background=random",
                    "you": false
                },
                {
                    "id": "136079f4-2e75-410c-9ae1-7a145fd92f27",
                    "name": "Dany",
                    "surname": "",
                    "avatar": "https://ui-avatars.com/api/?name=Dany&background=random",
                    "you": false
                },
                {
                    "id": "1ca4396d-ba59-4771-a9ea-a0e4cca8044a",
                    "name": "Ilya",
                    "surname": "Usachev",
                    "avatar": "https://ui-avatars.com/api/?name=Ilya+Usachev&background=random",
                    "you": false
                },
                {
                    "id": "fa60e320-eb40-4e3d-a431-797f55482ba1",
                    "name": "Verta",
                    "surname": "Zoom",
                    "avatar": "https://ui-avatars.com/api/?name=Verta+Zoom&background=random",
                    "you": false
                },
                {
                    "id": "feb0fc6d-0f64-49eb-bd81-b98ab01f9060",
                    "name": "Denis",
                    "surname": "Muratov",
                    "avatar": "https://ui-avatars.com/api/?name=Denis+Muratov&background=random",
                    "you": false
                }
            ]
        },
        {
            "id": "6a95aca8-605e-436a-bd33-5bbc786d769d",
            "created_at": 1640672788,
            "title": "Sanford Kayli",
            "avatar": "https://ui-avatars.com/api/?name=Kayli+Sanford",
            "private": true,
            "last_message": {
                "created_at": 1649730127,
                "user_id": "be215077-594e-4256-82e8-906625c69629",
                "user_name": "Clout",
                "user_surname": "Profi",
                "you": true,
                "message": "Quam hic vel consequatur expedita. Reprehenderit sit molestiae ut. Ad hic sunt facilis ut atque eaque."
            },
            "count_unread": 0,
            "users": [
                {
                    "id": "be215077-594e-4256-82e8-906625c69629",
                    "name": "Clout",
                    "surname": "Profi",
                    "avatar": "https://avatars.clout.one/O7bEEfltwNia.png"
                },
                {
                    "id": "da252e18-1545-4cd5-a494-437826d72e13",
                    "name": "Kayli",
                    "surname": "Sanford",
                    "avatar": "https://ui-avatars.com/api/?name=Kayli+Sanford"
                }
            ]
        },]}


type Set_Chat_AC_Type = ReturnType<typeof setChatAC>
type ActionType = Set_Chat_AC_Type

const chatReducer = (state: ChatType = initialState, action: ActionType): ChatType => {
    switch (action.type) {
        case 'SET_CHAT':
            return {...state, response: action.payload.response};
        default:
            return state;
    }
}

export const setChatAC = (payload: ChatType) => ({type: 'SET_CHAT', payload} as const)
export const setChat_TC = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionType>) => {

    api.getChat().then(res => {dispatch(setChatAC(res.data))})
        .catch(err => alert('Try agan'))

}


export default chatReducer