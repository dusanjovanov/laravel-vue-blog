require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(VueRouter);

new Vue({
    components: { app: require("./App.vue").default },
    template: "<app></app>",
    router
}).$mount("#app");
