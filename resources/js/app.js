require("./bootstrap");
import Vue from "vue";

new Vue({
    components: { app: require("./components/App").default },
    template: "<app></app>"
}).$mount("#app");
