import { createStore } from "vuex";
import product from "@/store/modules/product.js";
import filter from "@/store/modules/filter.js";

const store = createStore({
    modules: {
        product, filter
    }
})

export default store;
