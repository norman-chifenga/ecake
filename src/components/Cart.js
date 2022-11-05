import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import { editCart, deleteCart } from "../state/reducers/Cart";
import { useState, useEffect } from "react";

const Cart = (props) => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [subTotal, setSubTotal] = useState(0);
    const [delivery] = useState(20);
    const [total, settotal] = useState(0);

    useEffect(() => {
        let allItemTotal = 0;
        for (let i = 0; i < cartItems.length; i++) {
            allItemTotal += cartItems[i].price * cartItems[i].qty;
        }
        setSubTotal(allItemTotal);
        settotal(allItemTotal + delivery);
    }, [cartItems, delivery]);

    const handleQty = (id, qty, sign) => {
        if ((sign === -1 && qty > 1) || sign === 1) {
            let cartIndex = cartItems.findIndex((items) => items.id === id);
            let editedProduct = { items: { ...cartItems[cartIndex], qty: Number((parseFloat(cartItems[cartIndex].qty) + sign).toFixed(2)) }, new: cartIndex };
            dispatch(editCart(editedProduct));
        }
    };

    return (
        <div className="h-auto shadow-lg my-8 mx-auto sm:w-[80%] w-full top-0 right-0">
            <div className="flex p-4 justify-between items-center bg-gray-200 ">
                <h2 className="text-lg text-gray-500  font-bold ">Cart</h2>
                <h2 className="text-lg text-gray-500 font-bold"> {cartItems.length} Item</h2>
            </div>

            {cartItems.length !== 0 ? (
                <>
                    <ul className="list-none w-full bg-gray-100  text-[16px] text-gray-500 p-4">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex md:flex-row flex-col items-center py-3">
                                <div className=" w-[20%] h-fit overflow-hidden flex justify-center items-center">
                                    <img className="h-[100%]" src={require(`../assets/images/${item.img}`)} alt="cake" />
                                </div>
                                <div className="flex justify-between w-[100%]">
                                    <p className="col-span-2 w-[100%] text-[1.2em]"> {item.title}</p>
                                    <p className="justify-self-center w-[100%] md:block hidden"> ${item.price}</p>
                                    <div className="justify-self-center w-[50%] flex items-start">
                                        <button
                                            className="bg-gray-400 h-6 w-6  leading-6 text-center font-bold rounded-md text-white"
                                            onClick={() => handleQty(item.id, item.qty, -1)}
                                        >
                                            -
                                        </button>
                                        <p className="px-2">{item.qty}</p>
                                        <button
                                            className="bg-gray-400 h-6 w-6 leading-6 text-center font-bold rounded-md text-white"
                                            onClick={() => handleQty(item.id, item.qty, 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="justify-self-center w-[50%]">${(item.qty * item.price).toFixed(2)}</p>
                                    <GrFormClose onClick={() => dispatch(deleteCart(item.id))} className="text-highlight w-[20%] text-2xl justify-self-end " />
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-2 grid-rows-4 p-5 bg-gray-200 text-lg ">
                        <p className="text-gray-400">Sub total</p> <p className="text-gray-400  font-bold aligns-right">${subTotal.toFixed(2)}</p>
                        <p className="text-gray-400">Delivery</p> <p className=" text-gray-400  font-bold aligns-right"> ${delivery.toFixed(2)}</p>
                        <p className="text-gray-500">Total</p> <p className="text-gray-500  font-bold aligns-right"> ${total.toFixed(2)}</p>
                        <button
                            className="col-span-3  m-auto mt-4 bg-highlight text-white hover:text-highlight: px-7 py-1 rounded-sm"
                            type="submit"
                            value="Submit"
                        >
                            CHECKOUT
                        </button>
                    </div>
                </>
            ) : (
                <div className="min-h-[200px] bg-gray-100  flex justify-center items-center text-[16px] text-gray-500 p-4 w-full">
                    <p className="text-center">empty</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
