import {AppStateType} from "./store";
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
    isLoad: boolean
}
const initialState: ChatType = {
    response: [],
    isLoad: true,
}

type Set_Chat_AC_Type = ReturnType<typeof setChatAC>
type setOnLoadAC = ReturnType<typeof setOnLoadAC>
type setOffLoadAC = ReturnType<typeof setOffLoadAC>
export type ActionChatType = Set_Chat_AC_Type | setOnLoadAC | setOffLoadAC

const chatReducer = (state: ChatType = initialState, action: ActionChatType): ChatType => {
    switch (action.type) {
        case 'SET_CHAT':
            return {...state, response: action.payload.response};
        case 'SET_IsLoad_ON':
            return {...state, isLoad: action.payload};
        case 'SET_IsLoad_OFF':
            return {...state, isLoad: action.payload};

        default:
            return state;
    }
}

export const setChatAC = (payload: ChatType) => ({type: 'SET_CHAT', payload} as const)
export const setOnLoadAC = () => ({type: 'SET_IsLoad_ON', payload: true} as const)
export const setOffLoadAC = () => ({type: 'SET_IsLoad_OFF', payload: false} as const)
export const setChat_TC = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionChatType>) => {
    dispatch(setOnLoadAC())
    api.getChat().then(res => {
        dispatch(setChatAC(res.data))
    })
        .catch(err => alert('Try agan'))
        .finally(() => {
            dispatch(setOffLoadAC())
        })
}


export default chatReducer