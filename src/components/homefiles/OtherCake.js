import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../../state/reducers/Cart";

const Others = (props) => {
    let navigate = useNavigate();

    const Cakes = useSelector((state) => state.cakes);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddCart = (product) => {
        let cartIndex = cart.findIndex((item) => item.id === product.id);
        if (cartIndex === -1) {
            dispatch(addCart(product));
            props.notify();
        } else {
            let editedProduct = { ...product, qty: Number((cart[cartIndex].qty + 1).toFixed(2)), new: cartIndex };
            dispatch(addCart(editedProduct));
            props.notify();
        }
    };

    const CakeRoute = () => {
        navigate(`/cake`);
    };

    return (
        <div className="flex flex-col justify-center bg-gray-100">
            <div className="flex justify-center items-center px-10 h-32">
                <h3 className="font-allura  font-bold text-highlight text-4xl">Looking For Something Else</h3>
            </div>
            <ul className="w-[100%] h-auto gap-10 flex flex-wrap  justify-center align-middle items-center p-9">
                {Cakes.filter((item) => item.type === "Trending").map((item) => (
                    <li
                        key={item.id_}
                        className=" shadow-xl bg-slate-200 min-w-[280px] max-w-[290px] rounded-2xl h-[300px] px-4 p-2 grid
                   grid-co grid-rows-6 mx-8"
                    >
                        <div className="row-span-4 w-full h-full overflow-hidden flex justify-center items-center">
                            <img className="h-[100%]" src={require(`../../assets/images/${item.img}`)} alt="cake" />
                        </div>
                        <div className="row-span-2 pt-2 flex justify-between items-center flex-col">
                            <div className="flex justify-between bg-green w-full ">
                                <p className="text-gray-500">{item.title}</p>
                                <p className="font-bold text-gray-700">${item.price}</p>
                            </div>
                            <p className="object-fill text-xs overflow-hidden">{item.description}</p>
                            <button
                                className="text-xs  text-highlight px-2 font-bold py-1 rounded-md bg-gray-300"
                                onClick={() => handleAddCart({ title: item.title, price: item.price, qty: 1, id: item.id_, new: -1 })}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                className="bg-highlight mt-8 mb-16 w-fit mx-auto text-white text-base hover:text-highlight: px-7 py-1 rounded-lg"
                onClick={() => CakeRoute()}
            >
                {" "}
                VIew More
            </button>
        </div>
    );
};

export default Others;
