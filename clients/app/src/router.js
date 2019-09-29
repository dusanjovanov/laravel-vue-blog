import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: require("./pages/Home").default
    },
    {
        path: "/posts/:id",
        component: require("./pages/Post").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
