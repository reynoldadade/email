import { createApp } from "vue";
import "./style.scss";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import App from "./App.vue";
import routes from "./routes";

const app = createApp(App);

// setup store
const pinia = createPinia();

// instantiate your routes
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// use pinia
app.use(pinia);
// use router
app.use(router);
app.mount("#app");
