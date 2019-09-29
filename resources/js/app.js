import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faCode,
    faHeading,
    faListOl,
    faListUl,
    faParagraph,
    faRulerHorizontal,
    faQuoteLeft,
    faUndo,
    faRedo,
    faSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
require("./bootstrap");

// Vue router
Vue.router = router;
Vue.use(VueRouter);

// Vue axios
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;

// Font Awesome
library.add(
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faCode,
    faHeading,
    faListOl,
    faListUl,
    faParagraph,
    faRulerHorizontal,
    faQuoteLeft,
    faUndo,
    faRedo,
    faSquare
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null
    },
    actions: {
        setUser({ commit }, user) {
            commit("setUser", user);
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    }
});

new Vue({
    components: { app: require("./App.vue").default },
    template: "<app></app>",
    router,
    store
}).$mount("#app");
