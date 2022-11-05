import { createRef } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../../state/reducers/Cart";

const Category = (props) => {
    const scrollContainer = createRef();
    const Cakes = useSelector((state) => state.cakes);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleScroll = (scrollvalue) => {
        scrollContainer.current.scrollLeft += scrollvalue;
    };

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

    return (
        <>
            <div className="h-[100%] bg-gray-100 ">
                <div className="flex justify-center items-center px-10 h-32">
                    <h3 className="font-allura  font-bold text-highlight text-4xl">{props.title} Cakes</h3>
                </div>

                <div className="w-[100%] h-full flex items-center px-9">
                    <GrFormPrevious
                        className="hover:bg-gray-200 z-30 text-3xl"
                        onClick={() => {
                            handleScroll(-100);
                        }}
                    />
                    <ul
                        className="product-scroll-bar select-none w-full text-gray-500  h-[400px] items-center item-center v-[80%] flex mx-8 scroll-smooth overflow-x-scroll "
                        ref={scrollContainer}
                    >
                        {Cakes.filter((item) => item.type === props.title).map((item) => (
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
                                        onClick={() => handleAddCart({ title: item.title, img: item.img, price: item.price, qty: 1, id: item.id_, new: -1 })}
                                    >
                                        ADD TO CART
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <GrFormNext
                        className="hover:bg-gray-300 z-30 text-3xl"
                        onClick={() => {
                            handleScroll(100);
                        }}
                    />
                </div>
                <hr className="bg-gray-200  w-[80%] m-auto h-[3px]" />
            </div>
        </>
    );
};

export default Category;
