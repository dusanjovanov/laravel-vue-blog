import VueRouter from "vue-router";

const routes = [
    {
        path: "/login",
        component: require("./pages/Login").default
    },
    {
        path: "/register",
        component: require("./pages/Register").default
    },
    {
        path: "/",
        component: require("./pages/Dashboard").default
    },
    {
        path: "/posts",
        component: require("./pages/Posts").default
    },
    {
        path: "/posts/:action(add)",
        component: require("./pages/EditPost").default
    },
    {
        path: "/posts/:action(edit)/:id",
        component: require("./pages/EditPost").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
