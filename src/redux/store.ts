import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thankMiddleware from 'redux-thunk';
import chatReducer from "./chatsReducer";
import messageReducer from "./messageReducer";


let rootReducer = combineReducers({
    chat: chatReducer,
    message: messageReducer,
})
const store: Store<AppStateType, any> = createStore(rootReducer, applyMiddleware(thankMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export default store
