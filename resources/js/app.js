import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./router";
require("./bootstrap");

Vue.router = router;
Vue.use(VueRouter);

Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;

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
