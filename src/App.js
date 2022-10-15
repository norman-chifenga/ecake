import React from "react";
import Headers from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { useState} from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'
import { Homepage } from './components/homefiles/index'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Cakes from './components/Cakes'
import Default from './components/Default'
import Login from './components/Login'

const App = () => {
    return (
        <Provider store={store}>
               <Headers />
                <Routes>
                    <Route path="/" element = {<Navigate to="/home"/>}/>
                    <Route path="/home" element = {<Homepage />}/>
                    <Route path="/cart" element = {<Cart />}/>
                    <Route path="/cake" element = {<Cakes />}/>
                    <Route path="/login" element = {<Login />}/>
                    <Route path="*" element = {<Default />}/>
                </Routes>
                <Footer />
        </Provider>
    );
};

export default App;

            

