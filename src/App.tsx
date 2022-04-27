import React from 'react';
import style from './App.module.scss';
import {PageContainer} from "./pages/PageContainer";
import {Provider} from "react-redux";
import store from "./redux/store";


export const App = () => {

    return (
        <Provider store={store}>
            <div className={style.container}>
                <PageContainer/>
            </div>
        </Provider>

    );

}

