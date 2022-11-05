import { configureStore } from "@reduxjs/toolkit";
import Cake from "./reducers/Cakes";
import Cart from "./reducers/Cart";
import User from "./reducers/UserAccount";

export default configureStore({
    reducer: { cakes: Cake, cart: Cart, user: User },
});
