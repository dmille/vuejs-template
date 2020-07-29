import Vue from "vue";
import Router from "vue-router";
import Room from "@/views/Room";
import WelcomePage from "@/views/WelcomePage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/:roomId",
      name: "room",
      component: Room,
    },
    {
      path: "/",
      name: "welcome",
      component: WelcomePage,
    },
  ],
});
