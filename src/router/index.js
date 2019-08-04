import Vue from "vue";
import Router from "vue-router";
import Academic from "@/components/Academic";
import Work from "@/components/Work";
import Skills from "@/components/Skills";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/academic",
      name: "Academic",
      component: Academic
    },
    {
      path: "/work",
      name: "Work",
      component: Work
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills
    }
  ]
});
