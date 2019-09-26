import VueAuth from "@websanova/vue-auth";
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import auth from "./auth";
import router from "./router";
require("./bootstrap");

Vue.router = router;
Vue.use(VueRouter);

Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;
Vue.use(VueAuth, auth);

new Vue({
    components: { app: require("./App.vue").default },
    template: "<app></app>",
    router
}).$mount("#app");
