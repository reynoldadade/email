import { createApp } from "vue";
import "./style.scss";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes";

const app = createApp(App);

// instantiate your routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// use router
app.use(router);
app.mount("#app");
