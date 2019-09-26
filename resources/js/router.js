import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: require("./pages/Home").default,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/login",
        component: require("./pages/Login").default,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/register",
        component: require("./pages/Register").default,
        meta: {
            auth: undefined
        }
    },
    {
        path: "/posts/:id",
        component: require("./pages/Post").default,
        meta: {
            auth: undefined
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
