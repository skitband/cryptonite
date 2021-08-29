import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";
import vueNumeralFilterInstaller from "vue-numeral-filter";

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

Vue.use(vueNumeralFilterInstaller, { locale: "en-gb" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vueNumeralFilterInstaller,
  VueAxios,
  axios,
  render: (h) => h(App),
}).$mount("#app");


