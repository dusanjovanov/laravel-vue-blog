import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faPlus,
    faTable,
    faCode,
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faHeading,
    faParagraph,
    faListUl,
    faListOl,
    faQuoteLeft,
    faSquare,
    faUndo,
    faRedo
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import VueRouter from "vue-router";
import router from "./router";
import "./index.scss";
import "./theme/sb-admin-2.scss";

library.add(
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faPlus,
    faTable,
    faCode,
    faBold,
    faItalic,
    faUnderline,
    faStrikethrough,
    faHeading,
    faParagraph,
    faListUl,
    faListOl,
    faQuoteLeft,
    faSquare,
    faUndo,
    faRedo
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.prouctionTip = false;

// Vue router
Vue.router = router;
Vue.use(VueRouter);

new Vue({
    components: { app: require("./App.vue").default },
    render(h) {
        return h("app");
    },
    router
}).$mount("#root");
