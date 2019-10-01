import VueRouter from "vue-router";
import store from "./store";

const authCheck = (to, from, next) => {
    if (store.state.user === null) {
        next("/login");
    } else {
        next();
    }
};

const routes = [
    {
        path: "/login",
        component: require("./pages/Login").default
    },
    {
        path: "/",
        component: require("./pages/Layout").default,
        beforeEnter: authCheck,
        children: [
            {
                path: "",
                component: require("./pages/Dashboard").default
            },
            {
                path: "posts",
                component: require("./pages/Posts").default,
                beforeEnter: authCheck
            },
            {
                path: "posts/:action(add)",
                component: require("./pages/EditPost").default,
                beforeEnter: authCheck
            },
            {
                path: "posts/:action(edit)/:id",
                component: require("./pages/EditPost").default,
                beforeEnter: authCheck
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
    base: "/dashboard"
});

export default router;
