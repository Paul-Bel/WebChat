import {AppStateType} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {api} from "../api/api";
import {ActionChatType} from "./chatsReducer";

export type MessageUserType = {
    "id": string,
    "name": string,
    "surname": string,
    "avatar": string,
    "you": boolean
}
export type ResponseType = {
    "id": string,
    "created_at": number,
    "user": MessageUserType
    "message": string,
    "is_new": boolean
}
export type MessagesStateType = {
    "response": Array<ResponseType>
    isLoadMes: boolean
}
const initialState: MessagesStateType = {
    "response": [],
    isLoadMes: false
}


type Set_Chat_AC_Type = ReturnType<typeof setMessageAC>
type Set_Load_On_AC_Type = ReturnType<typeof setOnLoadMesAC>
type Set_Load_Off_Type = ReturnType<typeof setOffLoaMesdAC>
type ActionMessageType = Set_Chat_AC_Type | Set_Load_On_AC_Type | Set_Load_Off_Type

const messageReducer = (state: MessagesStateType = initialState, action: ActionMessageType): MessagesStateType => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {...state, response: action.payload.response};
        case 'SET_IsLoad_Mes_ON':
            return {...state, isLoadMes: action.payload};
        case 'SET_IsLoad_Mes_OFF':
            return {...state, isLoadMes: action.payload};

        default:
            return state;
    }
}

export const setMessageAC = (payload: MessagesStateType) => ({type: 'SET_MESSAGE', payload} as const)
const setOnLoadMesAC = () => ({type: 'SET_IsLoad_Mes_ON', payload: true} as const)
const setOffLoaMesdAC = () => ({type: 'SET_IsLoad_Mes_OFF', payload: false} as const)
export const setMessage_TC = (id: string) => (dispatch: ThunkDispatch<AppStateType, unknown, ActionMessageType | ActionChatType>) => {
    dispatch(setOnLoadMesAC())
    api.getMessage(id).then(res => {
        dispatch(setMessageAC(res.data))
    })
        .catch(err => alert('Try agan'))
        .finally(() => dispatch(setOffLoaMesdAC()))
}


export default messageReducer