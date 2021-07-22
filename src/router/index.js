import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/about", name: "About", component: () => import("../views/About.vue"), },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/posts", name: "PostsIndex", component: PostsIndex },
  { path: "/posts/new", name: "PostsNew", component: PostsNew },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
