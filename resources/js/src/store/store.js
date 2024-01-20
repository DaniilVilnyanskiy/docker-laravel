import { createStore } from "vuex";
import product from "@/store/modules/product.js";

const store = createStore({
    modules: {
        product
    }
})

export default store;
