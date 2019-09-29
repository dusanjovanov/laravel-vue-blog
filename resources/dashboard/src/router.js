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
        path: "/dashboard",
        component: require("./pages/Dashboard").default
    },
    {
        path: "/dashboard/posts/:action(add)",
        component: require("./pages/EditPost").default
    },
    {
        path: "/dashboard/posts/:action(edit)/:id",
        component: require("./pages/EditPost").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
