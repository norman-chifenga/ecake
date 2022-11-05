import React from "react";
import Headers from "./components/Header";
import { Provider } from "react-redux";
import store from "./state/store";
import { Routes, Route, Navigate} from 'react-router-dom'
import { Homepage } from './components/homefiles/index'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Cakes from './components/Cakes'
import Default from './components/Default'
import Login from './components/Login'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

    const notify = (title) => toast.success('Product successfully added to your shopping cart', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <Provider store={store}>
               <Headers />
                <Routes>
                    <Route path="/" element = {<Navigate to="/home"/>}/>
                    <Route path="/home" element = {<Homepage notify = {notify} />}/>
                    <Route path="/cart" element = {<Cart />}/>
                    <Route path="/cake" element = {<Cakes  notify = {notify}  />}/>
                    <Route path="/login" element = {<Login />}/>
                    <Route path="*" element = {<Default />}/>
                </Routes>
                <Footer />
                <ToastContainer />
        </Provider>
    );
};

export default App;

            

