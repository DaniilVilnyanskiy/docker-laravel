import { createStore } from "vuex";
import auth from "@/store/modules/auth.js";
import product from "@/store/modules/product.js";
import filter from "@/store/modules/filter.js";

const store = createStore({
    modules: {
        auth, product, filter
    }
})

export default store;
