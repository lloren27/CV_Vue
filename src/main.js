import Vue from "vue";
import App from "./App.vue";
import VueMaterial from "vue-material";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
