import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: require("./pages/Home").default
    },
    {
        path: "/login",
        component: require("./pages/Login").default
    },
    {
        path: "/register",
        component: require("./pages/Register").default
    },
    {
        path: "/posts/:id",
        component: require("./pages/Post").default
    },
    {
        path: "/dashboard",
        component: require("./pages/Dashboard").default
    },
    {
        path: "/dashboard/posts/:action(add|edit)/:id?",
        component: require("./pages/EditPost").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
