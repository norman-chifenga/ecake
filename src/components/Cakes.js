import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../state/reducers/Cart";

const Cakes = (props) => {
    const Cakes = useSelector((state) => state.cakes);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddCart = (product) => {
        let cartIndex = cart.findIndex((item) => item.id === product.id);
        if (cartIndex === -1) {
            dispatch(addCart(product));
            props.notify()
        } else {          
            const newUpdate = {...product, "qty":Number((cart[cartIndex].qty+1).toFixed(2)), "new":cartIndex }
            dispatch(addCart(newUpdate))
            props.notify()
        }
    };

    return (
        <div className="flex flex-col justify-center bg-gray">
            <div className="flex justify-center items-center px-10 h-32">
                <h3 className="font-allura  font-bold text-highlight text-4xl">Explore All of Our Delicious Products</h3>
            </div>
            <ul className="w-[100%] h-auto gap-10 flex flex-wrap  justify-center align-middle items-center p-9">
                {Cakes.map((item) => (
                    <li
                        key={item.id_}
                        className=" shadow-xl bg-slate-200 min-w-[280px] max-w-[290px] rounded-2xl h-[300px] px-4 p-2 grid
                   grid-co grid-rows-6 mx-8"
                    >
                        <div className="row-span-4 w-full h-full overflow-hidden flex justify-center items-center">
                            <img className="h-[100%]" src={require(`../assets/images/${item.img}`)} alt="cake" />
                        </div>
                        <div className="row-span-2 pt-2 flex justify-between items-center flex-col">
                            <div className="flex justify-between items-center bg-green w-full ">
                                <p className="text-gray-500 text-lg">{item.title}</p>
                                <p className="font-bold text-gray-700">${item.price}</p>
                            </div>
                            <button
                                className="text-xs  text-highlight px-2 font-bold py-1 rounded-md bg-gray-300"
                                onClick={() => handleAddCart({ title: item.title, img:item.img, price: item.price, qty: 1, id: item.id_ , new:-1})}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cakes;
